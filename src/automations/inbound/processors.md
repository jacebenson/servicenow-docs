---
title: Processors
layout: libdoc_page.liquid
eleventyNavigation:
    key: Processors
    parent: Inbound
date: git Last Modified
tags: 
    - stub
---

[Docs](https://www.servicenow.com/docs/csh?topicname=c_Processors.html&version=latest)

> I was talking to Nthumma about a problem. It was the need for a custom XML file for each incident. I knew of a way to do this, but it's old. Enter Processors.
> 
> If you ever have a need to make something auto-download, that would seem pretty difficult as you need to set headers as mentioned here on StackOverlow.
> 
> With processors this is a non-issue. Here's how to do it.
>
> ```js
> // Processor code
> 
> (function process(g_request, g_response, g_processor) {
>     try{
>     var filter = g_request.getParameter("filterQuery");
>     var fileName = filter + '.xml';
>     var contentType = 'xml/plain';
>     var fileContent = '';
>     var incident = new GlideRecord('incident');
>     incident.addEncodedQuery(filter);
>     incident.query();
>     fileContent+='<root>';
>     while(incident.next()) {
>         //generate XML format
>         fileContent+='<record>';
>         fileContent+='<message-type>'+ incident.getValue('short_description')+'</message-type>';
>         fileContent+='</record>';
>     }
>     fileContent+='</root>';
>     if(contentType == 'xml/plain'){
>         fileContent = new XMLDocument(fileContent);
>     }
>     g_response.addHeader('Content-Disposition', 'attachment;filename=' + fileName);
>     g_processor.writeOutput(contentType,fileContent);
>     } catch(error){
>         g_processor.writeOutput('text/html',error);
>     }
> })(g_request, g_response, g_processor);
> UI Action
> // Client side ui action
> downloadXML();
> function downloadXML() {
>     var sysparm_query = g_list.getQuery({orderby: true, fixed: true});
>     var url = '/customprocessor.do?filterQuery='+sysparm_query;
>     window.open(url, "_blank");
> }
> // Source: https://jace.pro/p/2019-07-12-using-processors-to-download-files
> ```
> Thanks Nthumma for the idea to make this post and the code above.
> 
> Further Reading;
> 
> - [John James Anderson Blog](https://web.archive.org/web/20180522040608/http://www.john-james-andersen.com/blog/service-now/create-your-own-rest-based-servicenow-web-service.html)
> - [John James Anderson Video](https://www.youtube.com/watch?v=n2a96TNlrMo)
> - [Mark Stanger Blog re: Attachments as Zip](https://www.servicenowguru.com/scripting/download-attachments-zip-file/)




