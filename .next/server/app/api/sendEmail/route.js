"use strict";(()=>{var e={};e.id=428,e.ids=[428],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1282:e=>{e.exports=require("child_process")},4770:e=>{e.exports=require("crypto")},665:e=>{e.exports=require("dns")},7702:e=>{e.exports=require("events")},2048:e=>{e.exports=require("fs")},2615:e=>{e.exports=require("http")},5240:e=>{e.exports=require("https")},8216:e=>{e.exports=require("net")},9801:e=>{e.exports=require("os")},5315:e=>{e.exports=require("path")},6162:e=>{e.exports=require("stream")},2452:e=>{e.exports=require("tls")},7360:e=>{e.exports=require("url")},1764:e=>{e.exports=require("util")},1568:e=>{e.exports=require("zlib")},6395:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>h,patchFetch:()=>x,requestAsyncStorage:()=>u,routeModule:()=>c,serverHooks:()=>g,staticGenerationAsyncStorage:()=>m});var o={};r.r(o),r.d(o,{POST:()=>l});var i=r(3278),s=r(5002),a=r(4877),n=r(6742);let d=({fname:e,lname:t,email:r,phone:o,content:i,date:s})=>`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
    <style>
      /* Reset styles */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: #2d3748;
        background-color: #f7fafc;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Container styles */
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      /* Header styles */
      .header {
        background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
        color: white;
        padding: 32px 24px;
        text-align: center;
      }

      .header h2 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 8px;
        letter-spacing: -0.025em;
      }

      .header p {
        font-size: 16px;
        opacity: 0.9;
      }

      /* Content styles */
      .content {
        padding: 32px 24px;
        background-color: white;
      }

      .section {
        margin-bottom: 24px;
        padding: 20px;
        background-color: #f8fafc;
        border-radius: 6px;
        border: 1px solid #e2e8f0;
      }

      .section:last-child {
        margin-bottom: 0;
      }

      .field {
        margin-bottom: 16px;
      }

      .field:last-child {
        margin-bottom: 0;
      }

      .label {
        font-size: 14px;
        font-weight: 600;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 4px;
      }

      .value {
        font-size: 16px;
        color: #1e293b;
        background-color: white;
        padding: 12px;
        border-radius: 4px;
        border: 1px solid #e2e8f0;
      }

      .message-content {
        white-space: pre-line;
        line-height: 1.8;
      }

      /* Divider */
      .divider {
        height: 1px;
        background-color: #e2e8f0;
        margin: 24px 0;
      }

      /* Footer styles */
      .footer {
        background-color: #f8fafc;
        padding: 24px;
        text-align: center;
        border-top: 1px solid #e2e8f0;
      }

      .timestamp {
        font-size: 14px;
        color: #64748b;
        margin-bottom: 12px;
      }

      .copyright {
        font-size: 14px;
        color: #94a3b8;
      }

      /* Highlights and Badges */
      .priority-badge {
        display: inline-block;
        padding: 4px 12px;
        background-color: #818cf8;
        color: white;
        border-radius: 9999px;
        font-size: 12px;
        font-weight: 500;
        margin-top: 8px;
      }

      /* Responsive design */
      @media only screen and (max-width: 600px) {
        .container {
          width: 100%;
          margin: 0;
          border-radius: 0;
        }

        .header {
          padding: 24px 16px;
        }

        .content {
          padding: 24px 16px;
        }

        .section {
          padding: 16px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>New Contact Inquiry</h2>
        <p>A new message has been received through the contact form</p>
      </div>

      <div class="content">
        <!-- Contact Information Section -->
        <div class="section">
          <div class="field">
            <div class="label">Contact Details</div>
            <div class="value">
              <strong>${e} ${t}</strong>
              ${o?`<br>📞 ${o}`:""}
              <br>📧 ${r}
            </div>
          </div>
        </div>

        <!-- Message Content Section -->
        <div class="section">
          <div class="field">
            <div class="label">Message Content</div>
            <div class="value message-content">
              ${i}
            </div>
          </div>
        </div>

        <div class="priority-badge">
          New Message
        </div>
      </div>

      <div class="footer">
        <div class="timestamp">
          📅 Received on ${s}
        </div>
        <div class="divider"></div>
        <div class="copyright">
          \xa9 ${new Date().getFullYear()} Your Company Name<br>
          <small>This is an automated message. Please do not reply directly to this email.</small>
        </div>
      </div>
    </div>
  </body>
</html>
`,p=({fname:e,lname:t,email:r,phone:o,content:i,date:s})=>`
NEW CONTACT FORM SUBMISSION
--------------------------

CONTACT DETAILS
--------------
Name: ${e} ${t}
Email: ${r}
${o?`Phone: ${o}
`:""}

MESSAGE
-------
${i}

--------------------------
Sent on: ${s}
Skinbloom
`;async function l(e,t){try{let{fname:t,lname:r,email:o,phone:i,content:s}=await e.json();if(!t||!r||!o||!s)return new Response(JSON.stringify({message:"Missing required fields",status:"error"}),{status:400});if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o))return new Response(JSON.stringify({message:"Invalid email format",status:"error"}),{status:400});let a=n.createTransport({host:"smtp.ionos.de",port:587,secure:!1,auth:{user:process.env.IONOS_EMAIL,pass:process.env.IONOS_PASSWORD},tls:{rejectUnauthorized:!1}}),l=new Date().toLocaleString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),c={fname:t,lname:r,email:o,phone:i,content:s,date:l},u={from:{name:"Contact Form",address:process.env.IONOS_EMAIL},to:process.env.IONOS_EMAIL,replyTo:o,subject:`New Contact Form Submission from ${t} ${r}`,html:d(c),text:p(c)};return await a.sendMail(u),new Response(JSON.stringify({message:"Thank you for your message. We will contact you soon!",status:"success"}),{status:200,headers:{"Content-Type":"application/json"}})}catch(e){return console.error("Error sending email:",e),new Response(JSON.stringify({message:"Sorry, we couldn't send your message. Please try again later.",status:"error",error:void 0}),{status:500,headers:{"Content-Type":"application/json"}})}}let c=new i.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/sendEmail/route",pathname:"/api/sendEmail",filename:"route",bundlePath:"app/api/sendEmail/route"},resolvedPagePath:"/home/tariqmuhammad/Desktop/skinbloom/skinbloomeshetics/app/api/sendEmail/route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:u,staticGenerationAsyncStorage:m,serverHooks:g}=c,h="/api/sendEmail/route";function x(){return(0,a.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:m})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[379,2],()=>r(6395));module.exports=o})();