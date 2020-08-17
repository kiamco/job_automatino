const Router = require('express').Router();

Router.get("/getcover", (req, res) => {
    const { company, job } = req.body;

    try {
        res.status(200).json({
            cover: `
            Hi,

            My name is Kim Kiamco,  I am excited for the opportunity to apply for the ${job} position. I will be an asset to the team because of my commitment to building quality web applications. I am a part-time student at coding bootcamp (Lambda school) taking the Full-Stack Web Development track and will be finishing the program soon. Currently, I work as a part time Operations engineer at Menlo Security, a cyber security company. I have been looking for a full time position and thought ${company} would be a great company to work for. My skills from Lambda school, working experience from Menlo Security and my adaptability in any environment will allow me to excel at ${company}. My main tech stack when working on web applications is Javascript, React, Node.js, and PostgreSQL but I am willing and excited to learn new languages if needed. I am familiar with DevOps tools and practices like Docker, AWS and can write python scripts that can help with deployment automation.
         
            I have attached my resume and I believe that my experience and education would make me an asset at ${company},  I look forward to contributing to a great company. I would love to talk more about it, please contact me at kiamcoo@gmail.com or call (909)-767-5806. You can also check out my portfolio at https://www.kiamco.dev/. Thank you for taking the time to read this, I hope to hear from you soon.   
         
            Thanks, 
            Kim Kiamco`
        });
    }
    catch (e) {
        return res.status(500).json({
            err: e
        });
    };


});