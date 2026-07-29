let products = {
    communities: {
        name: "Communities",
        docs: "https://www.servicenow.com/docs/csh?topicname=servicenow-communities.html&version=latest",
        store: null,
        product: "https://www.servicenow.com/products/communities.html",
    },
    csm: {
        name: "Customer Service Management",
        docs: "https://www.servicenow.com/docs/csh?topicname=c_CustomerServiceManagement.html&version=latest",
        store: null,
        product: "https://www.servicenow.com/products/customer-service-management.html"
    },
    engagementMessenger: {
        name: "Engagement Messenger",
        docs: "https://www.servicenow.com/docs/csh?topicname=setting-up-engagement-messenger.html&version=latest"
    },
    incident: {
        name: "Incident Management",
        docs: "https://www.servicenow.com/docs/csh?topicname=c_IncidentManagement.html&version=latest",
        store: null,
        product: "https://www.servicenow.com/products/incident-management.html"
    },
    problem: {
        name: "Problem Management",
        docs: "https://www.servicenow.com/docs/csh?topicname=c_ProblemManagement.html&version=latest",
        product: "https://www.servicenow.com/products/problem-management.html",
        store: null
    },
    change: {
        name: "Change Management",
        docs: "https://www.servicenow.com/docs/csh?topicname=c_ITILChangeManagement.html&version=latest",
        product: "https://www.servicenow.com/products/change-management.html"
    },
    request: {
        name: "Request Management",
        docs: "https://www.servicenow.com/docs/csh?topicname=c_RequestManagement.html&version=latest",
        product: "https://www.servicenow.com/products/request-management.html"
    },
    walkup: {
        name: "Walk-up Experience",
        docs: "https://www.servicenow.com/docs/csh?topicname=walkup-experience-landing-page.html&version=latest"
    },
    knowledge: {
        name: "Knowledge Management",
        docs: "https://www.servicenow.com/docs/csh?topicname=knowledge-management.html&version=latest",
        product: "https://www.servicenow.com/products/knowledge-management.html"
    },
    itam: {
        name: "Asset Management",
        product: "https://www.servicenow.com/products/it-asset-management.html",
        docs: "https://www.servicenow.com/docs/csh?topicname=it-asset-management.html&version=latest"
    },
    costManagement: {
        name: "Cost Management",
        product: "https://www.servicenow.com/products/cloud-cost-management.html",
    },
    dpm: {
        name: "Digital Portfolio Management",
        product: "https://www.servicenow.com/products/digital-portfolio-management.html",
        docs: "https://www.servicenow.com/docs/csh?topicname=dpm-landing.html&version=latest"
    },
    ur: {
        name: "Universal Request",
        docs: "https://www.servicenow.com/docs/csh?topicname=ur-landing-limitedaccess.html&version=latest"
    },
    va: {
        name: "Virtual Agent",
        product: "https://www.servicenow.com/products/virtual-agent.html",
        docs: "https://www.servicenow.com/docs/csh?topicname=virtual-agent-landing-page.html&version=latest",
    },
    pa: {
        name: "Performance Analytics",
        product: "https://www.servicenow.com/products/performance-analytics.html",
        docs: "https://www.servicenow.com/docs/csh?topicname=r_PALandingPage.html&version=latest",
    },
    paForHR: {
        name: "Performance Analytics for HRSD",
        product: "https://www.servicenow.com/products/performance-analytics.html",
        docs: "https://www.servicenow.com/docs/csh?topicname=scoped-hr-performance-analytics.html&version=latest"
    },
    proactiveCustomerServiceOperations: {
        name: "Proactive Customer Service Operations",
        docs: "https://www.servicenow.com/docs/csh?topicname=proactive-service-operations.html&version=latest",
    },
    taskIntelligence: {
        name: "Task Intelligence",
        product: "https://www.servicenow.com/products/task-intelligence.html",
        docs: "https://www.servicenow.com/docs/csh?topicname=csm-task-intelligence.html&version=latest"
    },
    cim: {
        name: "Continual Improvement Management",
        product: "https://www.servicenow.com/products/continual-improvement.html",
        docs: "https://www.servicenow.com/docs/csh?topicname=cim-landing-page.html&version=latest"
    },
    vendorManagementWorkspace: {
        name: "Vendor Management Workspace",
        product: "https://www.servicenow.com/products/vendor-manager-workspace.html",
        docs: "https://www.servicenow.com/docs/csh?topicname=vendor-management-workspace-landing-page.html&version=latest"
    },
    devops: {
        name: "DevOps",
        product: "https://www.servicenow.com/products/devops.html"
    },
    woForCSM: {
        name: "Workforce Optimization for CSM",
        product: "https://www.servicenow.com/products/workforce-optimization.html",
        docs: "https://www.servicenow.com/docs/csh?topicname=configurable-wfo-cs.html&version=latest",
        store: "https://store.servicenow.com/store/frame/product?pp=5c773fbd1b3a8110b79616db234bcba4"
    },
    woForITSM: {
        name: "Workforce Optimization for ITSM",
        product: "https://www.servicenow.com/products/workforce-optimization.html",
        docs: "https://www.servicenow.com/docs/csh?topicname=workforce-optimization-itsm-landing-page.html&version=latest",
        store: "https://store.servicenow.com/store/frame/product?pp=468e0e7f1b1ac910e57c0fe5604bcba8"
    },

    woForFSM: {
        name: "Workforce Optimization for FSM",
        product: "https://www.servicenow.com/products/workforce-optimization.html",
        docs: "https://www.servicenow.com/docs/csh?topicname=workforce-optimization-itsm-landing-page.html&version=latest",
        store: "https://store.servicenow.com/store/frame/product?pp=468e0e7f1b1ac910e57c0fe5604bcba8"
    },
    processMining: {
        name: "Process Mining",
        product: "https://www.servicenow.com/products/process-mining.html",
        docs: "https://www.servicenow.com/docs/csh?topicname=process-mining.html&version=latest"
    },
    mobilePublishing: {
        name: "Mobile Publishing",
        docs: "https://www.servicenow.com/docs/csh?topicname=mobile-publishing.html&version=latest",
        store: "https://store.servicenow.com/store/app/81eb232e1b246a50a85b16db234bcb1e"
    },
    pi: {
        name: "Predictive Intelligence",
        product: "https://www.servicenow.com/products/predictive-intelligence.html",
        docs: "https://www.servicenow.com/docs/csh?topicname=hr-predictive-intelligence-wb.html&version=latest",
    },
    piForHR: {
        name: "Predictive Intelligence for HRSD",
        docs: "https://www.servicenow.com/docs/csh?topicname=hr-predictive-intelligence-wb.html&version=latest",
    },
    piForFSM: {
        name: "Predictive Intelligence for FSM",
        docs: "https://www.servicenow.com/docs/csh?topicname=Activate-predictive-intl-fsm.html&version=latest"
    },
    appEngine: {
        name: "App Engine",
        product: "https://www.servicenow.com/now-platform/app-engine.html",
        docs: "https://www.servicenow.com/docs/csh?topicname=app-engine-vs-aes.html&version=latest",
    },
    ecp: {
        name: "Employee Center Pro",
        docs: "https://www.servicenow.com/docs/csh?topicname=employee-center-pro-landing.html&version=latest",
        store: "https://store.servicenow.com/store/app/e87aef261b246a50a85b16db234bcba7"
    },
    dispatcherWorkspace: {
        name: "Dispatcher Workspace",
        product: "https://www.servicenow.com/products/dispatcher-workspace.html",
        docs: "https://www.servicenow.com/docs/csh?topicname=dispatcher-activities.html&version=latest",
        store: "https://store.servicenow.com/sn_appstore_store.do#!/store/application/62690dabdbd610104c08f9751d961990"
    },

}
export let getLinks = function (term) {
    //return `<a href="example.com">${product}</a>`
    let output = [];
    let product = products?.[term];
    if (product) {
        if (!product.name) {
            output.push(`MISSING DETAILS for ${term} in skus.js`)
        }
        if (product.name && product?.product) {
            output.push(`<a href="${product.product}">${product.name}</a>`)
        }
        if (product.name && !product?.product) {
            output.push(`${product.name}`)
        }
        if (product?.docs) {
            output.push(`<a href="${product.docs}">Docs</a>`)
        }
        if (product?.store) {
            output.push(`<a href="${product.store}">Store</a>`)
        }
    } else {
        output.push(`MISSING ${term} in skus.js`)
    }
    return output.join(' ')
}

export let getEntitlements = function (sku) {
    return `[${sku}](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/other-document/entitlements/${sku}.pdf)`
}