const nodemailer = require("nodemailer");

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "newsflash12Hr@gmail.com",
            pass: "bootcamp123"
        }
    });
    
    
    transporter.verify(function(error, success) {
        if (error) {
             console.log(error);
        } else {
             console.log('Server is ready to take our messages');
        }
     });
    
       // const obj = {
        //     email: users[i].email,
        //     notify: users[i].notify,
        //     links: [],
        //     titles: []
        //   }
    
         const obj = {
            email: "ankita.kulkarni84@gmail.com",
            notify: true,
            links: ["https://www.cbsnews.com/news/unemployment-claims-3-million-jobless-report-last-week/","https://www.cbsnews.com/news/unemployment-claims-3-million-jobless-report-last-week/","https://www.cbsnews.com/news/unemployment-claims-3-million-jobless-report-last-week/"],
            titles: ["1Nearly 3 million U.S. workers filed unemployment claims last week - CBS News","2Nearly 3 million U.S. workers filed unemployment claims last week - CBS News","3Nearly 3 million U.S. workers filed unemployment claims last week - CBS News"]
          }
    
    async function sendEmail(obj){
    
        let html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>News</title>
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            />
        </head>
        <body>
            <div class="container" style="background-color: black">
                <b style="margin-right: 10px; color: #F781B0">Thank you for using NewsFlash</b><span ><a href="#" style="color:#BA2D65">Go to App</a></span> <br> 
                <img style=" width: 280px; height:260px;margin-right: 5px;" src='https://media.giphy.com/media/KxsmofvNnJWGLs3haf/giphy.gif'></img>
                <div style="width: auto; height:80px; border-style: solid;border-color: #BA2D65; background-color:black; color:#F781B0">
                    <p><strong>${obj.titles[0]}</strong></p>
                    <p><a target="_blank" href=${obj.links[0]}>Read the article</a></p>
                </div>

                <div style="width: auto; height:80px; border-style: solid;border-color: #BA2D65; background-color: black;color:#F781B0">
                <p><strong>${obj.titles[1]}</strong></p>
                <p><a target="_blank" href=${obj.links[1]}>Read the article</a></p>
                </div>

                <div style="width: auto; height:80px; border-style: solid;border-color: #BA2D65; background-color: black;color:#F781B0">
                <p><strong>${obj.titles[2]}</strong></p>
                <p><a target="_blank" href=${obj.links[2]}>Read the article</a></p>
                </div>

            </div>
        </body>
        </html>`
    
        let info = await transporter.sendMail({
            from: '"News Flash " <newsflash12Hr@gmail.com>', // sender address
            to: obj.email,
            //bcc: obj.email,
            subject: "Your 12Hr dose of news delivered ✔ ", // Subject line
            // text: "Thank you for using News Flash", // plain text body
            //html: "<b>Thank you for using News Flash</b> <br> <img src='https://media.giphy.com/media/KxsmofvNnJWGLs3haf/giphy.gif'></img>" // html body
            html: html
          });
    
        console.log("Message sent " + info.messageId)
    }

sendEmail(obj).catch(console.error);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// {
//     "status": "ok",
//     "totalResults": 38,
//     -"articles": [
//     -{
//     -"source": {
//     "id": "cbs-news",
//     "name": "CBS News"
//     },
//     "author": "Irina Ivanova",
//     "title": "Nearly 3 million U.S. workers filed unemployment claims last week - CBS News",
//     "description": "A total of 36 million Americans have applied for jobless benefits since the coronavirus erupted in March.",
//     "url": "https://www.cbsnews.com/news/unemployment-claims-3-million-jobless-report-last-week/",
//     "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2020/05/14/f7ad7da3-a688-4e9e-ae12-355c54f0b0ae/thumbnail/1200x630/058292289f076a0cb4d90eac0016c080/unemployment-gettyimages-1223521761.jpg",
//     "publishedAt": "2020-05-15T00:04:05Z",
//     "content": "Nearly 3 million U.S. workers filed for jobless benefits last week, the Labor Department said Thursday. That brings the total number of people applying for unemployment since the coronavirus pandemic erupted in March to 36 million.\r\nAn additional 3.5 million … [+1567 chars]"
// }

//"mitchgj@hotmail.com, jenn_ballard7@hotmail.com,  m.megha21@gmail.com, chrismw7579@gmail.com,