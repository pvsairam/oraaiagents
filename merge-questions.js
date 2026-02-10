// Script to merge new questions with existing ones, avoiding duplicates

const existingQuestions = [
    {
        "id": 2,
        "question": "As an implementer of AI agents, you are responsible for evaluating their performance with latency and token metrics for each interaction. Why is it important to consider latency and token metrics alongside correctness when assessing the overall performance?",
        "options": [
            "While latency and tokens reveal the efficiency and cost performance of the agent, correctness only validates semantic memory.",
            "While latency and tokens directly control whether a response is marked 'Complete' or not, correctness validates the factual alignment with expected results.",
            "While latency and tokens help ensure the actual outputs generated adhere to the formatting and structural requirements of the expected responses, correctness checks only logical consistency.",
            "While latency and tokens reveal the efficiency and cost performance of the agent, correctness validates the factual accuracy of the answer."
        ],
        "correctAnswer": 3,
        [cite_start]"source": "Oracle AI Agent Studio - Monitoring and Analytics [cite: 347, 352]"
    },
    {
        "id": 3,
        "question": "In Oracle AI Agent Studio, what is the significance of offline testing compared to online A/B testing?",
        "options": [
            "Offline testing requires manual verification, while A/B testing uses automated metrics.",
            "Offline testing ensures evaluation against reference answers before launch, while A/B testing checks live sentiment.",
            "Offline testing validates latency and token consumption before production, while A/B testing validates semantic correctness.",
            "Offline testing focuses on optimizing agent performance, while A/B testing validates the effectiveness of different agent configurations."
        ],
        "correctAnswer": 1,
        [cite_start]"source": "Oracle AI Agent Studio - Evaluation & Testing [cite: 358]"
    },
    {
        "id": 4,
        "question": "Fusion Applications that will access sensitive employee data has requested a clear explanation of how the solution safeguards personal information. How does the solution address these security and compliance requirements?",
        "options": [
            "By using keys to secure and stateless providers for encryption.",
            "By granting open access to all tools and APIs within the agent to streamline integration, restricting security checks.",
            "By relying on prompt-based instructions to disable data aggregation.",
            "By applying role-based access controls, enforcing API authentication, and enabling Oracle's guardrails for toxicity and prompt injection."
        ],
        "correctAnswer": 3,
        [cite_start]"source": "Oracle Fusion Security Reference & AI Agent Studio Guide [cite: 371]"
    },
    {
        "id": 5,
        "question": "A Leave & Absence agent in Fusion Applications frequently receives vague user queries such as 'Leave'. As a prompt designer, what should you do to improve accuracy?",
        "options": [
            "Keep the system prompt minimal and allow the AI model to infer intent from the user's context.",
            "Require users to ask questions as full sentences to enhance the model's intent recognition.",
            "Define clear rules in the system prompt for handling ambiguous queries and instruct the agent to ask users for clarification."
        ],
        "correctAnswer": 2,
        [cite_start]"source": "Oracle AI Agent Studio - Prompt Engineering Best Practices [cite: 380]"
    },
    {
        "id": 6,
        "question": "A financial services company wants an agent to provide tailored guidance for regulatory, tax, and audit queries, handling each with the correct logic and escalation path. How should this be configured to support this requirement in Oracle AI Agent Studio?",
        "options": [
            "Create separate Topics for regulatory, tax, and audit queries.",
            "A single Topic for regulatory, tax, and audit queries.",
            "Configure a Business Object Tool for regulatory, tax, and audit queries."
        ],
        "correctAnswer": 0,
        [cite_start]"source": "Oracle AI Agent Studio - Managing Topics [cite: 387]"
    },
    {
        "id": 7,
        "question": "Which Enterprise Service (ESS) process must be executed when a Document Type Tool is created before the agent can use the documents?",
        "options": [
            "Process Agent Document",
            "Data Summaries Using Generative AI",
            "Mass Ingest Journeys Data",
            "HCM Access Control List Initial Ingestion"
        ],
        "correctAnswer": 0,
        [cite_start]"source": "Oracle AI Agent Studio - Document Tools [cite: 393]"
    },
    {
        "id": 8,
        "question": "A business needs to restrict access to a specific AI Agent. As the Agent Team administrator, which configuration applies?",
        "options": [
            "Assign the Agent Team to a custom role with the Access Intelligent Agent Chat privilege."
        ],
        "correctAnswer": 0,
        [cite_start]"source": "Oracle Fusion Security Guide - AI Agents [cite: 403]"
    },
    {
        "id": 9,
        "question": "When configuring the execution of workforce subtasks, what is the impact of parallel execution?",
        "options": [
            "It increases the risk of errors without affecting completion time.",
            "It allows subtasks to run concurrently, reducing the overall completion time.",
            "It causes subtasks to run sequentially, increasing completion time."
        ],
        "correctAnswer": 1,
        [cite_start]"source": "Oracle AI Agent Studio - Orchestration [cite: 407]"
    },
    {
        "id": 10,
        "question": "An Oracle Fusion Applications administrator is configuring user access to allow employees to interact with and test AI Agents at runtime. Which privilege must be assigned to enable an employee to access and test an AI Agent in Oracle Fusion Applications?",
        "options": [
            "FND_GENAI_MANAGER",
            "FND_GENAI_MANAGER_DUTY",
            "ACCESS_INTELLIGENT_AGENT",
            "FND_GENAI_AGENT_RUNTIME_DUTY (FAI_GENAI_AGENT_RUNTIME_DUTY)"
        ],
        "correctAnswer": 3,
        [cite_start]"source": "Oracle Fusion Security Reference (25D/26A) [cite: 419]"
    },
    {
        "id": 11,
        "question": "You need to ensure agent answers match the official return policy and that any errors are identified before deployment. How can you confirm that the agent's responses are correct and meet business requirements?",
        "options": [
            "Have each customer service representative approve the responses individually.",
            "Refer against the documentation provided by the agent development team to ensure accuracy of answers.",
            "Test the agent with real-world questions and verify answers against the official policy."
        ],
        "correctAnswer": 2,
        [cite_start]"source": "Oracle AI Agent Studio - Testing Strategy [cite: 426]"
    },
    {
        "id": 12,
        "question": "You notice an agent frequently provides incomplete answers when candidates ask about job application status. How can you refine the system prompt to improve the clarity and reliability of the agent's responses?",
        "options": [
            "Make the system prompt longer by adding more information, regardless of structure.",
            "Use a complex SQL structure for the system reasoning.",
            "Break the system prompt into concise, step-by-step instructions that clearly outline the agent's expected actions."
        ],
        "correctAnswer": 2,
        [cite_start]"source": "Oracle AI Agent Studio - Prompt Engineering [cite: 433]"
    },
    {
        "id": 15,
        "question": "The system prompt for a Benefits Agent currently says: 'Display benefit enrollment data'. Employees find the answers confusing. How should you refine the system prompt to improve clarity and user experience?",
        "options": [
            "Rephrase the prompt to 'Show my current health plan and who is covered'.",
            "Shorten the prompt to make it more concise.",
            "Keep the existing prompt but provide examples of enrollment data.",
            "Add more policy-related terminology to match the Benefits policy manual."
        ],
        "correctAnswer": 0,
        [cite_start]"source": "Oracle AI Agent Studio - User Experience Design [cite: 439]"
    },
    {
        "id": 16,
        "question": "An outbound compliance agent retrieves the query 'What placards do I need for shipment?'. It must be grounded solely in internal policy and wants to minimize the number of tool calls. What modification should you make to reduce tool calls while ensuring answers are based only on permissions policy?",
        "options": [
            "Keep existing tools active and expand the policy coverage...",
            "Replace the document-based policy reference with a Business Object configuration to the agent...",
            "Disable the Deep Link capability so users remain within Fusion...",
            "Direct the agent to use the Document Tool for compliance and keep the Deep Link for navigation"
        ],
        "correctAnswer": 1,
        [cite_start]"source": "Oracle AI Agent Studio - Tool Usage [cite: 448]"
    },
    {
        "id": 17,
        "question": "How should you configure the AI agent to display only selected columns in the REST API response for specific opportunity questions?",
        "options": [
            "Select a business object that only retrieves the required fields",
            "Update the business object function to include all the fields and then filter the results",
            "Select the specific fields required in the 'Parameters and Business Object Fields' section"
        ],
        "correctAnswer": 2,
        [cite_start]"source": "Oracle AI Agent Studio - Business Object Tool Configuration [cite: 458]"
    },
    {
        "id": 18,
        "question": "Which duty role should be assigned to allow a user to interact with AI Agents in the application?",
        "options": [
            "FND GenAI Manager Duty",
            "FND GenAI Manager Job",
            "FAI GenAI Agent Runtime Duty (FAI_GENAI_AGENT_RUNTIME_DUTY)",
            "FAI GenAI Agent HCM Administrator Duty"
        ],
        "correctAnswer": 2,
        [cite_start]"source": "Oracle Fusion Security Reference [cite: 464]"
    },
    {
        "id": 19,
        "question": "You are designing an agent in Oracle Fusion AI Agent Studio to help employees view pay slips and calculate pay. The solution must strictly enforce access controls (users can only see their own data). Which configuration meets these requirements?",
        "options": [
            "Configure a Document Tool with pay policy PDFs and assign a Topic for pay calculations",
            "Use an External REST Tool to connect to an external payroll provider and a Document Tool for pay statements",
            "Use a Business Object Tool for pay data, a Deep Link Tool for payslip details, a Calculator Tool for pay calculations, and the Context Tool to enforce access controls",
            "Set up a Calculator Tool for pay calculations and a Documents Tool to provide pay policy information"
        ],
        "correctAnswer": 2,
        [cite_start]"source": "Oracle AI Agent Studio - Tool Usage [cite: 475]"
    },
    {
        "id": 20,
        "question": "After a quarterly update, users have reported that an agent is no longer able to retrieve invoices. What is the likely cause?",
        "options": [
            "The quarterly update deprecated the REST API, requiring all integrations to switch to SOAP",
            "The agent's prompt and topics were overwritten during the update, leading to incomplete conversational flows",
            "The quarterly update changed the API version path (e.g. from 11.13.18.05 to 11.13.18.06) for custom business objects"
        ],
        "correctAnswer": 2,
        [cite_start]"source": "Oracle Fusion REST API Update Policy [cite: 479]"
    },
    {
        "id": 21,
        "question": "A company wants to assign specific roles for configuration vs deployment. Which roles should be assigned to each group to ensure appropriate access control?",
        "options": [
            "Assign the Application Implementation Consultant role with permission groups for administrators...",
            "Assign the Application Implementation Consultant role with permission groups for administrators, and create a custom role with 'Access Intelligent Agent Chat' privilege for end users",
            "Assign product family-specific admin roles with permission groups enabled for administrators..."
        ],
        "correctAnswer": 1,
        [cite_start]"source": "Oracle AI Agent Studio - Security Setup [cite: 486]"
    },
    {
        "id": 22,
        "question": "You need to secure an external REST integration. Which security mechanism and data encryption standard is recommended when integrating the AI agent with the external service?",
        "options": [
            "OpenID Connect and data encryption using RSA",
            "OAuth 2.0 and data encryption using PGP",
            "Basic authentication and SSL/TLS encryption",
            "OAuth 2.0 and data encryption using AES-256"
        ],
        "correctAnswer": 3,
        [cite_start]"source": "Oracle Cloud Infrastructure Security Guide [cite: 493]"
    },
    {
        "id": 23,
        "question": "An Oracle AI agent accesses an external provider via REST API to query payroll data. How can you ensure security compliance?",
        "options": [
            "Allow all authenticated users to access payroll data and HTTP endpoints...",
            "Require multi-factor authentication for agent access and allow department managers to approve payroll queries",
            "Configure the REST tool to log all data access events and restrict agent access to users with the designated HR role",
            "Enable detailed audit logging for payroll data access and use HTTPS endpoints"
        ],
        "correctAnswer": 2,
        [cite_start]"source": "Oracle AI Agent Studio - External REST Security [cite: 502]"
    },
    {
        "id": 25,
        "question": "A global company wants to use Oracle AI Agent Studio... specific procedures for each region, and wants to ensure that users receive guidance in their local language and according to their region's policy. How should you organize Topics to support this requirement?",
        "options": [
            "Create Topics by language and region",
            "Upload regional policy documents with a Document Tool",
            "Use a single Topic with all translations and policies combined"
        ],
        "correctAnswer": 0,
        [cite_start]"source": "Oracle AI Agent Studio - Multi-language Support [cite: 515]"
    },
    {
        "id": 26,
        "question": "A Implementation Consultant needs to enable a custom role to chat with an agent. Which step in the Security Console is essential to enable this capability?",
        "options": [
            "Enable permission groups for the custom role and assign the relevant duty roles for each product family",
            "Assign a custom role to the user, add all desired privilege codes, and manually adjust data security policy...",
            "Add to the user and enable the Access Intelligent Agent Chat privilege"
        ],
        "correctAnswer": 2,
        [cite_start]"source": "Oracle Fusion Security Console [cite: 529]"
    },
    {
        "id": 27,
        "question": "When adding a new business object function using 'Add from Specification' to retrieve opportunity details by opportunity number, what is the correct setup?",
        "options": [
            "Get all opportunities",
            "Create opportunity (create opportunity) with a parameter for opportunity number",
            "Update opportunity (update opportunity) with a parameter for opportunity number",
            "Get all opportunities (get_all_opportunities) with a filter on opportunity number"
        ],
        "correctAnswer": 3,
        [cite_start]"source": "Oracle Visual Builder/Business Object API [cite: 535]"
    },
    {
        "id": 28,
        "question": "Which operation is used in the Business Object tool in Oracle AI Agent Studio to retrieve team details?",
        "options": [
            "Uses the 'Get Manager' function to retrieve team details",
            "Uses a pre-built function called 'match' for querying team members",
            "It only returns workers who report directly to the logged in user",
            "It provides a list of all employees in the entire organization"
        ],
        "correctAnswer": 2,
        [cite_start]"source": "Oracle HCM Cloud Documentation [cite: 541]"
    },
    {
        "id": 29,
        "question": "You are designing an agent in Oracle AI Agent Studio. The agent must retrieve inventory data from Fusion Inventory for locations they are authorized to access, and allow for future integration with logistics partners. How can this requirement be addressed?",
        "options": [
            "Upload Inventory spreadsheets regularly using a Document Tool and assign Topics for each warehouse",
            "Assign a Deep Link Tool to the inventory dashboard and use a Calculator Tool for stock estimates",
            "Combine a Document Tool for inventory record storage with a Deep Link Tool to logistics partner portals",
            "Add a Business Object Tool for inventory with role-based access and configure an External REST call"
        ],
        "correctAnswer": 3,
        [cite_start]"source": "Oracle AI Agent Studio - Tooling [cite: 554]"
    },
    {
        "id": 30,
        "question": "Which operation types are supported when creating a business object in Oracle Fusion's Agent Studio?",
        "options": [
            "POST, GET, PATCH, DELETE (CRUD)"
        ],
        "correctAnswer": 0,
        [cite_start]"source": "Oracle AI Agent Studio - Business Object Operations [cite: 557]"
    },
    {
        "id": 31,
        "question": "What should you include when defining an External REST API Tool in Oracle AI Agent Studio to ensure the agent successfully communicates with the service?",
        "options": [
            "The API response schema, supported error codes, and any required mapping to Fusion objects",
            "The endpoint URL, HTTP operation, and authentication details for the external API",
            "A set of predefined questions and answers related to the external service...",
            "A link to an external resource with information on the external API and a list of supported tools"
        ],
        "correctAnswer": 1,
        [cite_start]"source": "Oracle AI Agent Studio - REST Tool Definition [cite: 564]"
    },
    {
        "id": 32,
        "question": "A HR agent handling different HR processes follows the same escalation logic. How should the escalation logic and response style policies be attached to the Agent Team?",
        "options": [
            "Create a shared Topic for escalation logic and a separate Topic for response style",
            "Upload escalation and response style documents to the Document Tool",
            "Assign a Business Object Tool to query escalation logic and response style documents"
        ],
        "correctAnswer": 0,
        [cite_start]"source": "Oracle AI Agent Studio - Topic Management [cite: 572]"
    },
    {
        "id": 33,
        "question": "When configuring and activating tasks in a Guided Journey, which statement describes the activation and preview steps?",
        "options": [
            "Preview the journey and assign security roles for activation",
            "Preview is required, activation is optional",
            "Activation and preview are both required steps",
            "Only activation is required; preview is recommended"
        ],
        "correctAnswer": 3,
        [cite_start]"source": "Oracle HCM Guided Journeys Guide [cite: 583]"
    },
    {
        "id": 34,
        "question": "You are deploying an AI agent within Oracle Fusion Applications using a Guided Journey. Which actions are required to deploy the agent?",
        "options": [
            "Create a Guided Journey and add a Task type of 'agent', referencing your workflow agent",
            "Update the agent's access in Security Console and map permissions to user roles...",
            "Enter the Guided Journey code into the homepage page properties via Visual Builder Studio",
            "Assign the Guided Journey to a seeded Business Object tool..."
        ],
        "correctAnswer": 0,
        [cite_start]"source": "Oracle HCM Experience Design Studio [cite: 587]"
    },
    {
        "id": 35,
        "question": "You are configuring an AI agent to answer HR questions and want it to appear on the employee homepage. After completing the Agent Team setup in AI Agent Studio, what steps are required to visualize the agent?",
        "options": [
            "In Visual Builder Studio, enter the Guided Journey code in the dedicated field for homepage properties",
            "In AI Agent Studio, assign a Business Object Tool to the agent and update agent security...",
            "In the Application menu, duplicate the Agent Team and map it to the Guided Journey homepage...",
            "In Guided Journeys, create a new journey and add a task referencing the agent..."
        ],
        "correctAnswer": 0,
        [cite_start]"source": "Oracle AI Agent Studio - Deployment [cite: 594]"
    },
    {
        "id": 36,
        "question": "An administrator needs to update an existing policy with a new version. What is the recommended process for uploading new policy documents and making them available to the Agent?",
        "options": [
            "Delete existing tools from the Agent Team and create a new Document Tool for each policy update",
            "Add the policy documents as file attachments in the agent's workflow settings",
            "Link new policy documents in a Topic and attach the topic to the Agent Team to grant access",
            "Upload the new documents directly to the Document Tool and then run the Process Agent Documents ESS process"
        ],
        "correctAnswer": 3,
        [cite_start]"source": "Oracle AI Agent Studio - Knowledge Management [cite: 602]"
    },
    {
        "id": 37,
        "question": "An Oracle Fusion implementation team needs to grant an administrator full configuration and management access in AI Agent Studio for both the HCM and SCM product families. What is the required setup to provide the user with full administrator access to AI Agent Studio for both HCM and SCM?",
        "options": [
            "Enable permission groups, assign the Supply Chain Application Administrator role for SCM, and create a custom HCM admin role with permission groups...",
            "Assign the HCM Application Administrator and SCM Application Administrator roles without enabling permission groups",
            "Assign only the Application Implementation Consultant role to the user",
            "Assign only Fai GenAI Agent Runtime Duty to the user"
        ],
        "correctAnswer": 0,
        [cite_start]"source": "Oracle Identity Manager / Security Console [cite: 609]"
    },
    {
        "id": 38,
        "question": "A Finance AI Agent in Fusion Applications is experiencing inconsistent prompt performance due to uncertain instructions. What approach should be used to structure the system prompt to maximize clarity and accuracy?",
        "options": [
            "List all prompt details in order of perceived user importance, combining instructions...",
            "Integrate persona, instructions, inputs, and outcomes into a single narrative paragraph without demarcation",
            "Break the prompt into clearly defined sections by type such as persona, instructions, inputs, and desired output"
        ],
        "correctAnswer": 2,
        [cite_start]"source": "Oracle AI Agent Studio - Prompt Engineering [cite: 619]"
    },
    {
        "id": 39,
        "question": "Which metric is analyzed in Oracle AI Studio Automated Testing to determine if agent responses match expectations?",
        "options": [
            "Verification scores measured during live A/B testing with real users",
            "Correctness of the generated response compared to expected answers",
            "Token efficiency relative to test set averages",
            "Latency of response generation from input to output"
        ],
        "correctAnswer": 1,
        [cite_start]"source": "Oracle AI Agent Studio - Automated Testing [cite: 623]"
    },
    {
        "id": 40,
        "question": "You prepared and activated a Guided Journey linked to a newly developed agent, but users are reporting the agent is not visible on the responsive homepage. Which reasons explain why the embedded agent is not visible to users after deployment?",
        "options": [
            "The Agent Team has not been published within AI Agent Studio",
            "The homepage layout was customized after the Guided Journey was embedded...",
            "The Guided Journey is in the draft status",
            "The Guided Journey code was entered in a property field not associated with the homepage experience"
        ],
        "correctAnswer": 0,
        [cite_start]"source": "Oracle AI Agent Studio - Deployment Lifecycle [cite: 630]"
    },
    {
        "id": 41,
        "question": "When testing a Guided Journey, why is Preview mode recommended?",
        "options": [
            "Preview mode ensures homepage custom themes are not overwritten during deployment",
            "Preview mode validates that the Guided Journey agent appears and functions correctly in the UI context",
            "Preview mode automatically corrects misconfigured agent roles before publishing",
            "Preview mode is required to generate the Guided Journey's activation code"
        ],
        "correctAnswer": 1,
        [cite_start]"source": "Oracle Visual Builder Studio [cite: 638]"
    },
    {
        "id": 42,
        "question": "Which action should you perform in Visual Builder Studio to confirm that the Guided Journey agent appears correctly?",
        "options": [
            "Add the Guided Journey agent code to homepage properties and use the preview function to confirm appearance",
            "Enter the Guided Journey code in homepage properties and preview the page",
            "Edit the Visual Builder Studio template, update workflow triggers, and publish the home page"
        ],
        "correctAnswer": 1,
        [cite_start]"source": "Oracle Visual Builder Studio [cite: 649]"
    },
    {
        "id": 43,
        "question": "You are deploying a Guided Journey that includes an AI agent. During deployment, at what stage do you embed the code?",
        "options": [
            "When creating a new business object in Visual Builder Studio...",
            "When modifying the integration menu options...",
            "When updating the Page Properties section in Visual Builder Studio to include the Guided Journey code"
        ],
        "correctAnswer": 2,
        [cite_start]"source": "Oracle HCM Experience Design Studio [cite: 656]"
    },
    {
        "id": 44,
        "question": "A developer uses a Business Object to query and update benefits for an employee. How can you query details from a single enrollment?",
        "options": [
            "Add a new parameter to the Parameters and Business Object fields",
            "Use the Add From Specification option to create a Business Object function for single enrollment"
        ],
        "correctAnswer": 1,
        [cite_start]"source": "Oracle Visual Builder/Business Object API [cite: 660]"
    },
    {
        "id": 46,
        "question": "A developer needs to allow users to navigate to the Invoices work area directly from an agent conversation. Which configuration enables this navigation from the agent?",
        "options": [
            "Add a Document Tool containing the invoices policy and page link...",
            "Configure an External REST Tool for the instance...",
            "Create a deep link with the instance-relative URL, associate it with a Deep Link Tool, and assign the tool to the Agent"
        ],
        "correctAnswer": 2,
        [cite_start]"source": "Oracle AI Agent Studio - Deep Link Tool [cite: 676]"
    },
    {
        "id": 47,
        "question": "A customer is integrating Oracle AI Agent Studio with a third-party HR system. The solution must support bi-directional data flow. Which tool combination should they configure?",
        "options": [
            "External REST Tool and Business Object Tool",
            "External REST Tool and Deep Link Tool",
            "Deep Link Tool and User Session Tool",
            "Document Tool and Deep Link Tool"
        ],
        "correctAnswer": 0,
        [cite_start]"source": "Oracle AI Agent Studio - Integration Patterns [cite: 680]"
    },
    {
        "id": 48,
        "question": "Which information contributes to the effectiveness of Agent Training in Oracle AI Studio?",
        "options": [
            "Monitoring evaluation scores, performance metrics, and user satisfaction scores...",
            "By actually correlating offline testing correctness metrics with online A/B testing outcomes to generate comprehensive data-driven decision-making",
            "By providing usernames, start times, agent memory, prompts, topics, and instructions associated with each trace..."
        ],
        "correctAnswer": 1,
        [cite_start]"source": "Oracle AI Agent Studio - Training Effectiveness [cite: 689]"
    },
    {
        "id": 50,
        "question": "A Benefits Enrollment Agent is designed to help employees enroll in benefits by collecting dependent details. You notice that although the agent prompts the employee to enter dependent details in one step, it forgets this context when selecting the health plan in the next step. How should you refine the setup to ensure context is retained across steps?",
        "options": [
            "Set up separate workflows for dependents and health plans, each handling its own step",
            "Adjust the prompt so that the model references earlier text in the conversation...",
            "Configure session variables to hold dependent details so that they remain available when the health plan phase begins"
        ],
        "correctAnswer": 2,
        [cite_start]"source": "Oracle AI Agent Studio - Session Management [cite: 701]"
    },
    {
        "id": 52,
        "question": "What is the core difference between Agent Tracing and Prompt Tracing?",
        "options": [
            "Agent Tracing provides full visibility into usage and performance... while Prompt Tracing analyzes each prompt individually",
            "Agent Tracing provides step-by-step visualization of multi-step agent executions, while Prompt Tracing focuses on the specific generation",
            "Agent Tracing is tied to compliance evaluation workflows..."
        ],
        "correctAnswer": 1,
        [cite_start]"source": "Oracle AI Agent Studio - Observability [cite: 694]"
    }
];

const newQuestions = [
  {
    "id": 1,
    "question": "Which option best describes the main advantage of using Topics in Agent Studio?",
    "options": [
      "Enables direct database access",
      "Stores sensitive PII securely",
      "Improves code execution speed",
      "Makes prompt instructions reusable and easier to manage"
    ],
    "correctAnswer": 4,
    "source": "Oracle AI Agent Studio – Topics (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/using-topics.html)"
  },
  {
    "id": 2,
    "question": "What is the role of a Supervisor agent in a multi-agent workflow?",
    "options": [
      "To store company documents only",
      "To replace all business objects",
      "To monitor server hardware",
      "To orchestrate and route tasks to worker agents"
    ],
    "correctAnswer": 4,
    "source": "Oracle AI Agents – Multi-Agent Orchestration (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/multi-agent-orchestration.html)"
  },
  {
    "id": 3,
    "question": "Which type of tool in Agent Studio allows integration with third-party services via API?",
    "options": [
      "User Session Tool",
      "BI Connector",
      "Calculator Tool",
      "External REST Tool"
    ],
    "correctAnswer": 4,
    "source": "Oracle AI Agent Studio – External REST Tool (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/tools-overview.html)"
  },
  {
    "id": 4,
    "question": "Which three types of output are currently supported for delivery by Oracle AI Agent Studio?",
    "options": [
      "Processing and responding to image files in PDFs",
      "Text summarization of meetings",
      "Tabulated (table) output in markdown",
      "Semantic search on documents"
    ],
    "correctAnswer": [2, 3, 4],
    "source": "Oracle Fusion AI – Supported Output Types (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/output-and-responses.html)"
  },
  {
    "id": 5,
    "question": "What is a system prompt in the context of Oracle AI Agent Studio?",
    "options": [
      "An instruction set that defines agent behavior, identity, and constraints",
      "An instruction to insert field types into the database within AI Agent Studio",
      "An instruction for defining the template for email notifications",
      "An instruction where you can enter the question for the agent"
    ],
    "correctAnswer": 1,
    "source": "Oracle AI Agent Studio – Prompts and Instructions (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/prompt-engineering.html)"
  },
  {
    "id": 6,
    "question": "Which of these best helps reduce hallucinations in AI Agent responses?",
    "options": [
      "Dynamic grounding through RAG with relevant documents",
      "Running more hardware diagnostics",
      "Increasing prompt length",
      "Allowing access to all system data"
    ],
    "correctAnswer": 1,
    "source": "Oracle Fusion AI – RAG and Grounding (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/retrieval-augmented-generation.html)"
  },
  {
    "id": 7,
    "question": "Which security setup step is necessary after a Cloud Applications upgrade to enable Permission Groups in Agent Studio?",
    "options": [
      "Change the AI Agent Studio admin's email address",
      "Set the required profile option in Manage Administrator Profile Values",
      "Reprovision all users from scratch",
      "Disable the Human in the Loop feature"
    ],
    "correctAnswer": 2,
    "source": "Oracle Fusion Security – Permission Groups (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiau/security-for-ai-agent-studio.html)"
  },
  {
    "id": 8,
    "question": "Which is a typical use case for using Topics in prompts?",
    "options": [
      "Initiating agent upgrades",
      "Providing reusable instructions or constraints in agent prompts",
      "Modifying the agent's user interface",
      "Configuring additional hardware resources"
    ],
    "correctAnswer": 2,
    "source": "Oracle AI Agent Studio – Topics (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/using-topics.html)"
  },
  {
    "id": 9,
    "question": "When is a multi-agent (with Supervisor agent) configuration most appropriate?",
    "options": [
      "For increasing token usage only",
      "When the workflow is complex, modular, or requires domain specialization",
      "When editing static HTML pages",
      "When the task is a simple request with no dependencies"
    ],
    "correctAnswer": 2,
    "source": "Oracle AI Agents – Multi-Agent Orchestration (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/multi-agent-orchestration.html)"
  },
  {
    "id": 10,
    "question": "Which security privilege is required to assign access to end users for exploring AI Agents?",
    "options": [
      "ORA_FAI_MANAGE_ALL_AI_AGENTS",
      "ORA_HCM_VBCS_PWA_ENABLED",
      "HRC_ACCESS_AI_AGENT_CHAT_PRIV",
      "ORA_DR_FAI_GENERATIVE_AI_AGENT_HCM_ADMINISTRATOR_DUTY"
    ],
    "correctAnswer": 1,
    "source": "Oracle Fusion Apps Security – AI Agent Provisioning (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiau/security-for-ai-agent-studio.html)"
  },
  {
    "id": 11,
    "question": "Which three tools are available in AI Agent Studio?",
    "options": [
      "Deep Link Tool",
      "Hardware Scaling Tool",
      "Document Tool",
      "User Session Tool"
    ],
    "correctAnswer": [1, 3, 4],
    "source": "Oracle AI Agent Studio – Tools Overview (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/tools-overview.html)"
  },
  {
    "id": 12,
    "question": "Which statement is correct regarding Guardrails in Agent Studio?",
    "options": [
      "They ensure agents act within defined boundaries",
      "They are optional for production use",
      "They increase API call speed",
      "They adjust UI themes"
    ],
    "correctAnswer": 1,
    "source": "Oracle AI Agent Studio – Guardrails (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/guardrails.html)"
  },
  {
    "id": 13,
    "question": "What does the Human in the Loop feature enable in Agent Studio workflows?",
    "options": [
      "Requires automatic escalation of tasks to management",
      "Enables setting read-only access for users",
      "Requires human review or approval before an agent takes certain actions",
      "Allows agents to write and approve their own changes"
    ],
    "correctAnswer": 3,
    "source": "Oracle AI Agent Studio – Human in the Loop (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/human-in-the-loop.html)"
  },
  {
    "id": 14,
    "question": "What must be enabled before custom roles can be assigned for AI Studio?",
    "options": [
      "Permission Groups",
      "Real-Time Auditing",
      "BI Reporting Modules",
      "Backup Scheduling"
    ],
    "correctAnswer": 1,
    "source": "Oracle Fusion Security – Permission Groups (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiau/security-for-ai-agent-studio.html)"
  },
  {
    "id": 15,
    "question": "Which feature ensures AI Agents only access data permitted to the user?",
    "options": [
      "Prompt-length limitation",
      "Role-based access control",
      "Open API templates",
      "External plugin modules"
    ],
    "correctAnswer": 2,
    "source": "Oracle Fusion Security – RBAC (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiau/security-overview.html)"
  },
  {
    "id": 16,
    "question": "What is the main purpose of a summarization prompt in Agent Studio?",
    "options": [
      "To manage user notifications",
      "To increase the number of fields",
      "To initiate a file upload",
      "To instruct the AI agent to condense information into a concise output"
    ],
    "correctAnswer": 4,
    "source": "Oracle AI Agent Studio – Prompt Engineering (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/prompt-engineering.html)"
  },
  {
    "id": 17,
    "question": "Which statement accurately describes Business Objects in AI Agent Studio?",
    "options": [
      "They provide a structure for agents to interact with Fusion data and APIs",
      "They act as placeholders for UI changes",
      "They are used for end user authentication",
      "They allow upload of text and images"
    ],
    "correctAnswer": 1,
    "source": "Oracle Fusion Apps – Business Objects (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/facbo/business-objects.html)"
  },
  {
    "id": 18,
    "question": "Which capability is provided by the Document Tool in AI Agent Studio?",
    "options": [
      "Direct manipulation of image files",
      "Dynamic UI form creation",
      "Execution of payroll reports",
      "Semantic search on uploaded unstructured documents"
    ],
    "correctAnswer": 4,
    "source": "Oracle AI Agent Studio – Document Tool (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/document-tool.html)"
  },
  {
    "id": 19,
    "question": "Which statement best describes an AI Agent in Oracle AI Agent Studio?",
    "options": [
      "An internal database backup process",
      "A business rule that triggers emails",
      "A digital worker that can automate tasks and take actions",
      "A static analytics report"
    ],
    "correctAnswer": 3,
    "source": "Oracle AI Agent Studio – Introduction (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/introduction-to-ai-agents.html)"
  },
  {
    "id": 20,
    "question": "What is the core benefit of using prebuilt templates in Agent Studio?",
    "options": [
      "They require zero configuration",
      "They automatically generate employee contracts",
      "They allow faster deployment through reusable workflows",
      "They process only financial data"
    ],
    "correctAnswer": 3,
    "source": "Oracle AI Agent Studio – Templates (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/using-templates.html)"
  },
  {
    "id": 21,
    "question": "What is the primary purpose of an AI Agent in Oracle AI Agent Studio?",
    "options": [
      "To discard data records",
      "To create custom dashboards",
      "To automate tasks by interpreting user goals and taking actions",
      "To manage application upgrades"
    ],
    "correctAnswer": 3,
    "source": "Oracle AI Agent Studio – What Agents Do (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/introduction-to-ai-agents.html)"
  },
  {
    "id": 22,
    "question": "Which is the best practice when writing prompts for Oracle AI Agent Studio agents?",
    "options": [
      "Use only short phrases",
      "Allow ambiguity to foster creativity",
      "Be explicit and specific about the agent's role, tasks, and expected outputs",
      "Include as many related instructions as possible"
    ],
    "correctAnswer": 3,
    "source": "Oracle Prompt Engineering – Best Practices (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/prompt-engineering.html)"
  },
  {
    "id": 23,
    "question": "What step is required after uploading unstructured documents for AI semantic search in the Document Tool?",
    "options": [
      "Process and embed documents manually into a vector DB",
      "Enable Permission Groups for the document",
      "Share documents publicly",
      "Run the Process Agent Documents scheduled process"
    ],
    "correctAnswer": 4,
    "source": "Oracle AI Agent Studio – Document Processing (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/document-tool.html)"
  },
  {
    "id": 24,
    "question": "In Agent Studio, what is the Business Object Tool used for?",
    "options": [
      "Resizing user interface forms",
      "Generating marketing keywords",
      "Retrieving and transacting on Fusion business objects",
      "Processing external RSS feeds"
    ],
    "correctAnswer": 3,
    "source": "Oracle AI Agent Studio – Business Object Tool (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/tools-overview.html)"
  },
  {
    "id": 25,
    "question": "Which agent component is described as reusable, focused on a subject area, and aligns agent responses to certain themes?",
    "options": [
      "Supervisor agent",
      "Credential Store",
      "Topic",
      "Document Tool"
    ],
    "correctAnswer": 3,
    "source": "Oracle AI Agent Studio – Topics (https://docs.oracle.com/en/cloud/saas/fusion-applications/25d/faiaa/using-topics.html)"
  }
];

// Normalize question text for comparison (remove extra spaces, punctuation, make lowercase)
function normalizeText(text) {
    return text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
}

// Check if two questions are duplicates
function isDuplicate(q1, q2) {
    const normalized1 = normalizeText(q1.question);
    const normalized2 = normalizeText(q2.question);
    
    // Check if questions are very similar (exact match after normalization)
    return normalized1 === normalized2;
}

// Merge questions
function mergeQuestions() {
    const uniqueNewQuestions = [];
    let duplicateCount = 0;
    
    for (const newQ of newQuestions) {
        let foundDuplicate = false;
        
        // Check against existing questions
        for (const existingQ of existingQuestions) {
            if (isDuplicate(newQ, existingQ)) {
                console.log(`DUPLICATE FOUND: "${newQ.question.substring(0, 60)}..."`);
                foundDuplicate = true;
                duplicateCount++;
                break;
            }
        }
        
        // If not duplicate, add to unique list
        if (!foundDuplicate) {
            uniqueNewQuestions.push(newQ);
        }
    }
    
    // Combine and renumber
    const combined = [...existingQuestions, ...uniqueNewQuestions];
    
    // Renumber all questions to be sequential starting from 1
    const renumbered = combined.map((q, index) => ({
        ...q,
        id: index + 1,
        // Fix correctAnswer to be 0-indexed if it's currently 1-indexed
        correctAnswer: Array.isArray(q.correctAnswer) 
            ? q.correctAnswer.map(a => a - 1) // Convert array indices
            : (q.correctAnswer > 3 ? q.correctAnswer - 1 : q.correctAnswer) // Fix 1-indexed to 0-indexed
    }));
    
    console.log(`\n=== MERGE SUMMARY ===`);
    console.log(`Existing questions: ${existingQuestions.length}`);
    console.log(`New questions provided: ${newQuestions.length}`);
    console.log(`Duplicates skipped: ${duplicateCount}`);
    console.log(`Unique new questions added: ${uniqueNewQuestions.length}`);
    console.log(`Total questions after merge: ${renumbered.length}`);
    
    return renumbered;
}

// Run the merge
const mergedQuestions = mergeQuestions();

// Output the result
console.log('\n=== GENERATING OUTPUT ===');
const output = `export const initialQuestions = ${JSON.stringify(mergedQuestions, null, 4)};`;

// Write to file
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, 'src', 'data', 'questions.js');
fs.writeFileSync(outputPath, output, 'utf8');

console.log(`\n✓ Successfully wrote merged questions to: ${outputPath}`);
console.log(`\nNote: Multi-answer questions (with correctAnswer as array) are now supported!`);
