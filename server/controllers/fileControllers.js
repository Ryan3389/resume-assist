// const router = require('express').Router()
const { MongoClient, GridFSBucket } = require("mongodb")
// const multer = require('multer')
const { Readable } = require('stream')
const { v4: uuidv4 } = require("uuid")
// const User = require('../models/User')
const OpenAI = require("openai")
const mammoth = require('mammoth');
require('dotenv').config()


const openai = new OpenAI({
    apiKey: process.env.API_KEY
})

const mongoURI = process.env.MONGO_URI


const client = new MongoClient(mongoURI)

let bucket;

client.connect()
    .then(() => {
        const db = client.db();
        bucket = new GridFSBucket(db, { bucketName: "uploads" })
    })
    .catch((error) => console.error("MongoDB connection error", error))



async function submitResume(req, res) {


    if (!req.file) {

        return res.status(400).json({ message: "Please select a file to upload" });
    }


    const filename = uuidv4();

    const uploadStream = bucket.openUploadStream(filename);
    const readableStream = Readable.from(req.file.buffer);
    readableStream.pipe(uploadStream);


    uploadStream.on("finish", async () => {
        const { experience, jobTitle } = req.body

        try {
            const resume = await mammoth.extractRawText(req.file.buffer)
            const recommendation = await resumeResults(experience, jobTitle, resume)
            // const mockInterview = await mockInterviewQuestions(experience, jobTitle, resume)
            res.status(200).json(recommendation)
            // res.status(200).json({ "resume_analysis": recommendation, "mock_interview": mockInterview })

        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    });

    uploadStream.on("error", (err) => {
        console.error(err);
        res.status(500).json({ message: "File upload failed", error: err });
    });
}


async function getFile(req, res) {
    try {
        // Get the file name 
        const files = await bucket.find({ filename: req.params.filename }).toArray()

        // check if there is a file available
        if (!files || files.length === 0) {
            // If not, send error
            return res.status(400).json({ message: "files not found" })
        }

        // Process for sending file to front end 
        bucket.openDownloadStreamByName(req.params.filename).pipe(res);
    } catch (error) {
        res.status(500).json(error)
    }
}


async function resumeResults(experience, jobTitle, uploadedResume) {
    const resume = JSON.stringify(uploadedResume)

    try {
        const messages = [
            {
                role: 'system',
                content: `You are an expert career coach. You will recieve three pieces of data, one called experience, one called job title, and one called resume. Experience refers to the years of work experience the user has. Job title refers to the job the user wants next. Resume refers to the users uploaded resume. Provide links to educational resources that will make them a better candidate.`
            },

            {
                role: 'user',
                content: `Experience: ${experience}, job title: ${jobTitle}, resume: ${resume} `
            }
        ]

        const aiResponse = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: messages
        })

        const results = aiResponse.choices[0].message
        return results
    } catch (error) {
        console.log(error)
        return error
    }
}



// async function mockInterviewQuestions(experience, jobTitle, uploadedResume) {
//     const resume = JSON.stringify(uploadedResume)

//     const messages = [
//         {
//             role: 'system',
//             content: `You are an expert in the field of ${jobTitle}. Provide 10 mock interview questions based on these three categories: experience, job title, resume`
//         },
//         {
//             role: "user",
//             content: `Experience: ${experience}, job title: ${jobTitle}, resume: ${resume}`
//         }
//     ]

//     const aiResponse = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo',
//         messages: messages
//     })
//     const results = aiResponse.choices[0].message
//     return results

// }


module.exports = { submitResume, getFile }