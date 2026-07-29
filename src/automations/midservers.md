---
title: "Midservers"
layout: libdoc_page.liquid
eleventyNavigation:
    key: Midservers
    parent: Automations
    order: 2700
date: git Last Modified
---

Midservers are... amazing.  

When ServiceNow falls short of being able to do something, you can generally use a Midserver to do it.  They are like little agents that run on your network.

Setting them up can be a BEAR.  

## What is a MID Server?

 A MID Server is a application that runs on a server that is on your network.  This allows ServiceNow to connect to network resources like Active Directory, SCCM, or any other system that is not directly accessible from the ServiceNow instance.

## What does a MID Server do?

A MID Server fundamentally runs scripts and commands on your network.

## How does a MID Server connect to ServiceNow?

MID Servers use a publish and subscribe model to communicate with ServiceNow.  The communication is invoked from the MID Server to ServiceNow.  It utilized the [websocket protocol on top of CometD](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0829978).  This reads the `ecc_queue` table for commands to run and writes the results back to the `ecc_queue` table.

## Testing Commands on a MID Server

You can test commands ... by inserting records onto the `ecc_queue` table and that works okay.  It's a pain to do that.  You can alternatively use the `mid_tools_form.do` page to test commands.  It's locked down, and to gain access you need to modify the Access Control Rule to allow `admin` to access it.  With that you can test running commands using code like;

```js
var str = new Packages.java.lang.String("Hello World");
ms.log("Running command: " + str);
// Should return "Hello World"
```

## REST and API Request from a MID Server

The MID Server uses a Topic, Key and Source to make the calls.  

Topics like `RESTProbe` that is used to make REST calls. `SystemCommand` is used to run commands on the server.

Output queue is work to be done by the MID Server.

Input queue is the results of the work done by the MID Server.

State is the status of the `ecc_queue` record.

## Types of MID Server Scripts

MID Server Script Includes you can do a lot of Packages calls.  You can see this by looking at the `ecc_agent_script_include` table.


## Flows and MID Servers

## Custom Code Executions on MID Servers

### Flow Designer

Flow Designer has a **Script Step** and that has a **Required Runtime**.  Normally that's `Instance` however you can choose `MID` and you can run a script on the MID Server just like done on the `mid_tools_form.do` page.

The code for a Script Step like that would look like the following.

```js
(function execute(inputs, outputs) {
    ms.log("Executing MID Server Script Step");
})(inputs, outputs);
```

That's all the good stuff about Flow Designer and MID Servers.

Now the bad.  There's a Topic called `IPaaSActionProbe` and it sends a very small payload to the MID Server.  This is nice cause it's small and simple.  But it doesnt tell you want ran.  This is what runs when you use a Flow Designer Action over a MID Server.  

To see what is actually happening you can using like mitmproxy to observe the traffic between the MID Server and ServiceNow.  You can see the payloads that are sent and received.

This shows some more.  Back in the day (pre-madrid) ServiceNow would pull `ecc_queue` every 5 minutes and they kept reducing that down until they added websockets.  Now it is real-time and the MID Server will get the commands as soon as they are sent.  You can see that with the `amb`.  

Running the mitmproxy shows the with the `IPaaSActionProbe` topic, the `ecc_queue` starts the execution, then the MID Server goes back to the instance to get the actual data to run by making REST calls to `/now/hub/plan/{sysid}?sysparm_mid...`.  You can see any outputs returned if you navigate to the `ecc_agent` (MID Server) and use the UI Action Grab MID Server Logs to see the logs including any `ms.log` calls.

### Powershell

Powershell can technically run on Windows and Linux, however as of 2023, it only works on Windows.

Powershell scripts you want to sync to a MID Server are stored on the `ecc_agent_script_file` table.

### Node.js or anything else Command Line

Command line script can be run on the MID Server by using the `SystemCommand` topic. 

### Custom Java JAR Code

You can create custom Java JAR files and upload them on the `ecc_agent_jar` table.  These get synced onto all of your MID Servers.  You can then call them from your MID Server Script Includes.

## Additional Resources

- [📺 47m - Chuck Tomasi - TechNow Episode 60 - How a MID server ...](https://www.youtube.com/watch?v=rJb0YDSCATo)
- [📺 10m - Justin Meadows - ServiceNow MID Server Windows Server 2022](https://www.youtube.com/watch?v=3O8OG191pdU)
- [📺 70m - Chris Nanda - ServiceNow MID Server Deep Dive](https://youtu.be/0ldGpEAxqGA?t=606)
- [📺 6m - John J. Andersen - Custom JAR Files on a MID Server](https://www.youtube.com/watch?v=tOHuFVE3XNQ)
- [📄 - John Dahl - Mid Server Docker Setup Script](https://github.com/johndahl-now/servicenow_mid_server_docker_setup_script)
- [📄 - Boris Moers - Docker Mid Server Setup](https://github.com/bmoers/docker-mid-server)
- [📄 - ServiceNow - MID Server Fundamentals](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0993941)
- [📄 - Maik Skoddow - MID Server Knowledge & Troubleshooting Resources](https://www.servicenow.com/community/itom-articles/platform-mid-server-knowledge-amp-troubleshooting-resources/ta-p/2320520)
- [📄 - John J. Andersen - Command Line Executions via MID Server](https://john-james-andersen.com/blog/service-now/command-line-execution-with-servicenow-mid-servers.html)
