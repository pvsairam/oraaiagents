export const initialQuestions = [
    {
        "id": 1,
        "question": "Which option best describes the main advantage of using Topics in Agent Studio?",
        "options": [
            "Enables direct database access",
            "Stores sensitive PII securely",
            "Improves code execution speed",
            "Makes prompt instructions reusable and easier to manage"
        ],
        "correctAnswer": 3,
        "source": "Oracle AI Agent Studio – Topics"
    },
    {
        "id": 2,
        "question": "As an implementer of AI agents, you are responsible for evaluating their performance with latency and token metrics. Why is it important to consider these alongside correctness?",
        "options": [
            "While latency and tokens reveal efficiency, correctness only validates semantic memory.",
            "While latency and tokens control 'Complete' status, correctness validates factual alignment.",
            "Correctness checks only logical consistency.",
            "While latency and tokens reveal efficiency/cost, correctness validates the factual accuracy of the answer."
        ],
        "correctAnswer": 3,
        "source": "Oracle AI Agent Studio - Monitoring and Analytics"
    },
    {
        "id": 3,
        "question": "In Oracle AI Agent Studio, what is the significance of offline testing compared to online A/B testing?",
        "options": [
            "Offline testing requires manual verification, while A/B testing uses automated metrics.",
            "Offline testing ensures evaluation against reference answers before launch, while A/B testing checks live sentiment.",
            "Offline testing validates latency before production, while A/B testing validates semantic correctness.",
            "Offline testing focuses on optimizing agent performance, while A/B testing validates configuration effectiveness."
        ],
        "correctAnswer": 1,
        "source": "Oracle AI Agent Studio - Evaluation & Testing"
    },
    {
        "id": 4,
        "question": "Fusion Applications accessing sensitive employee data requires safeguarding personal information. How does the solution address these security requirements?",
        "options": [
            "By using keys to secure and stateless providers for encryption.",
            "By granting open access to all tools and APIs within the agent to streamline integration.",
            "By relying on prompt-based instructions to disable data aggregation.",
            "By applying role-based access controls, enforcing API authentication, and enabling Oracle's guardrails."
        ],
        "correctAnswer": 3,
        "source": "Oracle Fusion Security Reference & AI Agent Studio Guide"
    },
    {
        "id": 5,
        "question": "A Leave & Absence agent frequently receives vague queries like 'Leave'. As a prompt designer, what should you do?",
        "options": [
            "Keep the system prompt minimal and allow the AI to infer intent.",
            "Require users to ask questions as full sentences.",
            "Define clear rules in the system prompt for ambiguous queries and instruct the agent to ask for clarification.",
            "Hardcode a response that always assumes 'Annual Leave'."
        ],
        "correctAnswer": 2,
        "source": "Oracle AI Agent Studio - Prompt Engineering Best Practices"
    },
    {
        "id": 6,
        "question": "A financial services company wants an agent to provide tailored guidance for regulatory, tax, and audit queries. How should this be configured?",
        "options": [
            "Create separate Topics for regulatory, tax, and audit queries.",
            "A single Topic for regulatory, tax, and audit queries.",
            "Configure a Business Object Tool for regulatory, tax, and audit queries.",
            "Use a single general prompt for all financial queries."
        ],
        "correctAnswer": 0,
        "source": "Oracle AI Agent Studio - Managing Topics"
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
        "source": "Oracle AI Agent Studio - Document Tools"
    },
    {
        "id": 8,
        "question": "A business needs to restrict access to a specific AI Agent. As the Agent Team administrator, which configuration applies?",
        "options": [
            "Assign the Agent Team to a custom role with the Access Intelligent Agent Chat privilege.",
            "Assign the Agent Team to a public group.",
            "Assign the Agent Team to a duty role without specific privileges.",
            "Configure the agent to be open but use a password."
        ],
        "correctAnswer": 0,
        "source": "Oracle Fusion Security Guide - AI Agents"
    },
    {
        "id": 9,
        "question": "When configuring the execution of workforce subtasks, what is the impact of parallel execution?",
        "options": [
            "It increases the risk of errors without affecting completion time.",
            "It allows subtasks to run concurrently, reducing the overall completion time.",
            "It causes subtasks to run sequentially, increasing completion time.",
            "It disables the ability to use tools."
        ],
        "correctAnswer": 1,
        "source": "Oracle AI Agent Studio - Orchestration"
    },
    {
        "id": 10,
        "question": "Which privilege must be assigned to enable an employee to access and test an AI Agent in Oracle Fusion Applications?",
        "options": [
            "FND_GENAI_MANAGER",
            "FND_GENAI_MANAGER_DUTY",
            "ACCESS_INTELLIGENT_AGENT",
            "FND_GENAI_AGENT_RUNTIME_DUTY (FAI_GENAI_AGENT_RUNTIME_DUTY)"
        ],
        "correctAnswer": 3,
        "source": "Oracle Fusion Security Reference (25D/26A)"
    },
    {
        "id": 11,
        "question": "You need to ensure agent answers match the official return policy and errors are identified before deployment. How do you confirm correctness?",
        "options": [
            "Have each customer service representative approve the responses individually.",
            "Refer against the documentation provided by the agent development team.",
            "Test the agent with real-world questions and verify answers against the official policy.",
            "Rely solely on the confidence score provided by the LLM."
        ],
        "correctAnswer": 2,
        "source": "Oracle AI Agent Studio - Testing Strategy"
    },
    {
        "id": 12,
        "question": "An agent frequently provides incomplete answers regarding job application status. How can you refine the system prompt?",
        "options": [
            "Make the system prompt longer by adding more information regardless of structure.",
            "Use a complex SQL structure for the system reasoning.",
            "Break the system prompt into concise, step-by-step instructions that clearly outline expected actions.",
            "Remove all instructions and let the model guess."
        ],
        "correctAnswer": 2,
        "source": "Oracle AI Agent Studio - Prompt Engineering"
    },
    {
        "id": 13,
        "question": "What is the role of a Supervisor agent in a multi-agent workflow?",
        "options": [
            "To store company documents only",
            "To replace all business objects",
            "To monitor server hardware",
            "To orchestrate and route tasks to worker agents"
        ],
        "correctAnswer": 3,
        "source": "Oracle AI Agents – Multi-Agent Orchestration"
    },
    {
        "id": 14,
        "question": "Which type of tool in Agent Studio allows integration with third-party services via API?",
        "options": [
            "User Session Tool",
            "BI Connector",
            "Calculator Tool",
            "External REST Tool"
        ],
        "correctAnswer": 3,
        "source": "Oracle AI Agent Studio – External REST Tool"
    },
    {
        "id": 15,
        "question": "The system prompt for a Benefits Agent says 'Display benefit enrollment data' and employees find answers confusing. How should you refine it?",
        "options": [
            "Rephrase the prompt to 'Show my current health plan and who is covered'.",
            "Shorten the prompt to make it more concise.",
            "Keep the existing prompt but provide examples of enrollment data.",
            "Add more policy-related terminology to match the Benefits policy manual."
        ],
        "correctAnswer": 0,
        "source": "Oracle AI Agent Studio - User Experience Design"
    },
    {
        "id": 16,
        "question": "An outbound compliance agent query must be grounded solely in internal policy and minimize tool calls. What modification should you make?",
        "options": [
            "Keep existing tools active and expand the policy coverage.",
            "Replace the document-based policy reference with a Business Object configuration.",
            "Disable the Deep Link capability so users remain within Fusion.",
            "Direct the agent to use the Document Tool for compliance and keep the Deep Link."
        ],
        "correctAnswer": 1,
        "source": "Oracle AI Agent Studio - Tool Usage"
    },
    {
        "id": 17,
        "question": "How should you configure the AI agent to display only selected columns in the REST API response for specific opportunity questions?",
        "options": [
            "Select a business object that only retrieves the required fields.",
            "Update the business object function to include all fields and then filter.",
            "Select the specific fields required in the 'Parameters and Business Object Fields' section.",
            "Use a Document tool to parse the columns."
        ],
        "correctAnswer": 2,
        "source": "Oracle AI Agent Studio - Business Object Tool Configuration"
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
        "source": "Oracle Fusion Security Reference"
    },
    {
        "id": 19,
        "question": "You are designing an agent to help employees view pay slips and calculate pay with strict access controls. Which configuration meets these requirements?",
        "options": [
            "Configure a Document Tool with pay policy PDFs and assign a Topic.",
            "Use an External REST Tool to connect to an external payroll provider.",
            "Use a Business Object Tool for pay data, a Deep Link Tool for payslip details, and a Calculator Tool.",
            "Set up a Calculator Tool for pay calculations and a Documents Tool for policy."
        ],
        "correctAnswer": 2,
        "source": "Oracle AI Agent Studio - Tool Usage"
    },
    {
        "id": 20,
        "question": "After a quarterly update, users report an agent is no longer able to retrieve invoices. What is the likely cause?",
        "options": [
            "The quarterly update deprecated the REST API, requiring a switch to SOAP.",
            "The agent's prompt and topics were overwritten.",
            "The quarterly update changed the API version path (e.g. from 11.13.18.05 to 11.13.18.06).",
            "The agent was deleted."
        ],
        "correctAnswer": 2,
        "source": "Oracle Fusion REST API Update Policy"
    },
    {
        "id": 21,
        "question": "A company wants to assign specific roles for configuration vs deployment. Which roles ensure appropriate access control?",
        "options": [
            "Assign the Application Implementation Consultant role to administrators.",
            "Assign App Implementation Consultant to admins, and create a custom role with 'Access Intelligent Agent Chat' for end users.",
            "Assign product family-specific admin roles with permission groups enabled.",
            "Grant full admin access to all users."
        ],
        "correctAnswer": 1,
        "source": "Oracle AI Agent Studio - Security Setup"
    },
    {
        "id": 22,
        "question": "Which security mechanism and data encryption standard is recommended when integrating the AI agent with an external REST service?",
        "options": [
            "OpenID Connect and data encryption using RSA.",
            "OAuth 2.0 and data encryption using PGP.",
            "Basic authentication and SSL/TLS encryption.",
            "OAuth 2.0 and data encryption using AES-256."
        ],
        "correctAnswer": 3,
        "source": "Oracle Cloud Infrastructure Security Guide"
    },
    {
        "id": 23,
        "question": "An Oracle AI agent accesses an external provider via REST API to query payroll data. How can you ensure security compliance?",
        "options": [
            "Allow all authenticated users to access payroll data.",
            "Require multi-factor authentication for agent access.",
            "Configure the REST tool to restrict agent access to users with the designated HR role.",
            "Enable detailed audit logging for payroll data access only."
        ],
        "correctAnswer": 2,
        "source": "Oracle AI Agent Studio - External REST Security"
    },
    {
        "id": 24,
        "question": "What is a system prompt in the context of Oracle AI Agent Studio?",
        "options": [
            "An instruction set that defines agent behavior, identity, and constraints",
            "An instruction to insert field types into the database within AI Agent Studio",
            "An instruction for defining the template for email notifications",
            "An instruction where you can enter the question for the agent"
        ],
        "correctAnswer": 0,
        "source": "Oracle AI Agent Studio – Prompts and Instructions"
    },
    {
        "id": 25,
        "question": "A Consultant needs to enable a custom role to chat with an agent. Which step in the Security Console is essential?",
        "options": [
            "Enable permission groups for the custom role and assign duty roles.",
            "Assign a custom role to the user and manually adjust data security.",
            "Add the 'Access Intelligent Agent Chat' privilege to the user's role.",
            "Enable the API access key."
        ],
        "correctAnswer": 2,
        "source": "Oracle Fusion Security Console"
    },
    {
        "id": 26,
        "question": "When adding a new business object function using 'Add from Specification' to retrieve opportunity details by number, what is the correct setup?",
        "options": [
            "Get all opportunities.",
            "Create opportunity with a parameter for opportunity number.",
            "Update opportunity with a parameter.",
            "Get all opportunities with a filter on opportunity number."
        ],
        "correctAnswer": 3,
        "source": "Oracle Visual Builder/Business Object API"
    },
    {
        "id": 27,
        "question": "Which operation is used in the Business Object tool to retrieve team details?",
        "options": [
            "Uses the 'Get Manager' function.",
            "Uses a pre-built function called 'match' for querying team members.",
            "It only returns workers who report directly to the logged-in user.",
            "It provides a list of all employees in the entire organization."
        ],
        "correctAnswer": 1,
        "source": "Oracle HCM Cloud Documentation"
    },
    {
        "id": 28,
        "question": "Why would you integrate Oracle Fusion AI Agent with external services via REST API?",
        "options": [
            "To restrict integration to internal data only.",
            "To extend agents with external platforms such as Slack or Microsoft Teams.",
            "To replace the internal database.",
            "To avoid using Business Objects."
        ],
        "correctAnswer": 1,
        "source": "Oracle AI Agent Studio - Integrations"
    },
    {
        "id": 29,
        "question": "The agent must retrieve inventory data from Fusion Inventory for authorized locations and allow for future integration with logistics partners. How?",
        "options": [
            "Upload Inventory spreadsheets regularly using a Document Tool.",
            "Assign a Deep Link Tool to the inventory dashboard.",
            "Combine a Document Tool for inventory records with a Deep Link Tool.",
            "Add a Business Object Tool for inventory with role-based access and configure an External REST call."
        ],
        "correctAnswer": 3,
        "source": "Oracle AI Agent Studio - Tooling"
    },
    {
        "id": 30,
        "question": "Which operation types are supported when creating a business object in Oracle Fusion's Agent Studio?",
        "options": [
            "POST, GET, PATCH, DELETE (CRUD).",
            "JOIN, MERGE, SPLIT",
            "SELECT, INSERT, UPDATE",
            "CREATE, READ, UPDATE, DELETE (CRUD) only"
        ],
        "correctAnswer": 0,
        "source": "Oracle AI Agent Studio - Business Object Operations"
    },
    {
        "id": 31,
        "question": "What should you include when defining an External REST API Tool to ensure the agent successfully communicates with the service?",
        "options": [
            "The API response schema, supported error codes, and any required mapping.",
            "The endpoint URL, HTTP operation, and authentication details for the external API.",
            "A set of predefined questions and answers.",
            "A link to an external resource with information on the external API."
        ],
        "correctAnswer": 1,
        "source": "Oracle AI Agent Studio - REST Tool Definition"
    },
    {
        "id": 32,
        "question": "A HR agent handling different HR processes follows the same escalation logic. How should the escalation logic be attached?",
        "options": [
            "Create a shared Topic for escalation logic and a separate Topic for response style.",
            "Upload escalation and response style documents to the Document Tool.",
            "Assign a Business Object Tool to query escalation logic.",
            "Hardcode it in every agent."
        ],
        "correctAnswer": 0,
        "source": "Oracle AI Agent Studio - Topic Management"
    },
    {
        "id": 33,
        "question": "When configuring and activating tasks in a Guided Journey, which statement describes the activation and preview steps?",
        "options": [
            "Preview the journey and assign security roles for activation.",
            "Preview is required, activation is optional.",
            "Activation and preview are both required steps.",
            "Only activation is required; preview is recommended."
        ],
        "correctAnswer": 3,
        "source": "Oracle HCM Guided Journeys Guide"
    },
    {
        "id": 34,
        "question": "You are deploying an AI agent within Oracle Fusion Applications using a Guided Journey. Which actions are required?",
        "options": [
            "Create a Guided Journey and add a Task type of 'agent'.",
            "Update the agent's access in Security Console and map permissions.",
            "Enter the Guided Journey code into the homepage page properties.",
            "Both Create the Guided Journey Task AND Enter the Code in Page Properties."
        ],
        "correctAnswer": 3,
        "source": "Oracle HCM Experience Design Studio"
    },
    {
        "id": 35,
        "question": "After completing the Agent Team setup in AI Agent Studio, what steps are required to visualize the agent on the homepage?",
        "options": [
            "In Visual Builder Studio, enter the Guided Journey code in the dedicated field for homepage properties.",
            "In AI Agent Studio, assign a Business Object Tool to the agent.",
            "In the Application menu, duplicate the Agent Team.",
            "In Guided Journeys, create a new journey."
        ],
        "correctAnswer": 0,
        "source": "Oracle AI Agent Studio - Deployment"
    },
    {
        "id": 36,
        "question": "An administrator needs to update an existing policy with a new version. What is the recommended process?",
        "options": [
            "Delete existing tools from the Agent Team and create a new Document Tool.",
            "Add the policy documents as file attachments in the workflow settings.",
            "Link new policy documents in a Topic and attach to the Agent Team.",
            "Upload new documents directly to the Document Tool and run the Process Agent Documents ESS process."
        ],
        "correctAnswer": 3,
        "source": "Oracle AI Agent Studio - Knowledge Management"
    },
    {
        "id": 37,
        "question": "An implementation team needs to grant an administrator full configuration access for both HCM and SCM families. What is the setup?",
        "options": [
            "Enable permission groups, assign Supply Chain Admin for SCM, and create custom HCM admin role with permission groups.",
            "Assign HCM and SCM Application Administrator roles without permission groups.",
            "Assign only the Application Implementation Consultant role.",
            "Assign only FAI GenAI Agent Runtime Duty."
        ],
        "correctAnswer": 0,
        "source": "Oracle Identity Manager / Security Console"
    },
    {
        "id": 38,
        "question": "A Finance AI Agent is experiencing inconsistent prompt performance. What approach should be used to structure the system prompt?",
        "options": [
            "List all prompt details in order of perceived user importance.",
            "Integrate persona, instructions, inputs, and outcomes into a single narrative paragraph.",
            "Break the prompt into clearly defined sections by type such as persona, instructions, inputs, and desired output.",
            "Remove the persona section."
        ],
        "correctAnswer": 2,
        "source": "Oracle AI Agent Studio - Prompt Engineering"
    },
    {
        "id": 39,
        "question": "Which metric is analyzed in Oracle AI Studio Automated Testing to determine if agent responses match expectations?",
        "options": [
            "Sentiment verification scores measured during live A/B testing.",
            "Correctness of the generated response compared to expected answers.",
            "Token efficiency relative to test set averages.",
            "Latency of response generation from input to output."
        ],
        "correctAnswer": 1,
        "source": "Oracle AI Agent Studio - Automated Testing"
    },
    {
        "id": 40,
        "question": "Users report the embedded agent is not visible on the responsive homepage. What is a likely reason?",
        "options": [
            "The Agent Team has not been published within AI Agent Studio.",
            "The homepage layout was customized after the Guided Journey was embedded.",
            "The Guided Journey is in the draft status.",
            "The Guided Journey code was entered in a property field not associated with the homepage experience."
        ],
        "correctAnswer": 0,
        "source": "Oracle AI Agent Studio - Deployment Lifecycle"
    },
    {
        "id": 41,
        "question": "When testing a Guided Journey, why is Preview mode recommended?",
        "options": [
            "Preview mode ensures homepage custom themes are not overwritten.",
            "Preview mode validates that the Guided Journey agent appears and functions correctly in the UI context.",
            "Preview mode automatically corrects misconfigured agent roles.",
            "Preview mode is required to generate the Guided Journey's activation code."
        ],
        "correctAnswer": 1,
        "source": "Oracle Visual Builder Studio"
    },
    {
        "id": 42,
        "question": "Which action should you perform in Visual Builder Studio to confirm that the Guided Journey agent appears correctly?",
        "options": [
            "Add the Guided Journey agent code to homepage properties and use the preview function.",
            "Enter the Guided Journey code in homepage properties and preview the page.",
            "Edit the Visual Builder Studio template, update workflow triggers, and publish the home page.",
            "Publish the page blindly and check in Production."
        ],
        "correctAnswer": 1,
        "source": "Oracle Visual Builder Studio"
    },
    {
        "id": 43,
        "question": "You are deploying a Guided Journey that includes an AI agent. During deployment, at what stage do you embed the code?",
        "options": [
            "When creating a new business object in Visual Builder Studio.",
            "When modifying the integration menu options.",
            "When updating the Page Properties section in Visual Builder Studio to include the Guided Journey code.",
            "When assigning the agent to the user role."
        ],
        "correctAnswer": 2,
        "source": "Oracle HCM Experience Design Studio"
    },
    {
        "id": 44,
        "question": "A developer uses a Business Object to query and update benefits for an employee. How can you query details from a single enrollment?",
        "options": [
            "Add a new parameter to the 'Parameters and Business Object Fields'.",
            "Use the 'Add From Specification' option to create a Business Object function for single enrollment.",
            "Add the ID manually.",
            "It is not possible to query single enrollments."
        ],
        "correctAnswer": 1,
        "source": "Oracle Visual Builder/Business Object API"
    },
    {
        "id": 45,
        "question": "Which information contributes to the effectiveness of Agent Training in Oracle AI Studio?",
        "options": [
            "Monitoring evaluation scores, performance metrics, and user satisfaction scores.",
            "By actually correlating offline testing correctness metrics with online A/B testing outcomes to generate data-driven decisions.",
            "By providing usernames, start times, agent memory, prompts, and topics associated with each trace.",
            "By reviewing the server logs only."
        ],
        "correctAnswer": 1,
        "source": "Oracle AI Agent Studio - Training Effectiveness"
    },
    {
        "id": 46,
        "question": "A developer needs to allow users to navigate to the Invoices work area directly from an agent conversation. Which configuration enables this?",
        "options": [
            "Add a Document Tool containing the invoices policy and page link.",
            "Configure an External REST Tool for the instance.",
            "Create a deep link with the instance-relative URL, associate it with a Deep Link Tool, and assign to the Agent.",
            "Use a Business Object Tool."
        ],
        "correctAnswer": 2,
        "source": "Oracle AI Agent Studio - Deep Link Tool"
    },
    {
        "id": 47,
        "question": "A customer is integrating Oracle AI Agent Studio with a third-party HR system. The solution must support bi-directional data flow. Which tool combination?",
        "options": [
            "External REST Tool and Business Object Tool.",
            "External REST Tool and Deep Link Tool.",
            "Deep Link Tool and User Session Tool.",
            "Document Tool and Deep Link Tool."
        ],
        "correctAnswer": 0,
        "source": "Oracle AI Agent Studio - Integration Patterns"
    },
    {
        "id": 48,
        "question": "Which of these best helps reduce hallucinations in AI Agent responses?",
        "options": [
            "Dynamic grounding through RAG with relevant documents",
            "Running more hardware diagnostics",
            "Increasing prompt length",
            "Allowing access to all system data"
        ],
        "correctAnswer": 0,
        "source": "Oracle Fusion AI – RAG and Grounding"
    },
    {
        "id": 49,
        "question": "Which security setup step is necessary after a Cloud Applications upgrade to enable Permission Groups in Agent Studio?",
        "options": [
            "Change the AI Agent Studio admin's email address",
            "Set the required profile option in Manage Administrator Profile Values",
            "Reprovision all users from scratch",
            "Disable the Human in the Loop feature"
        ],
        "correctAnswer": 1,
        "source": "Oracle Fusion Security – Permission Groups"
    },
    {
        "id": 50,
        "question": "A Benefits Enrollment Agent prompts for dependent details but forgets them when selecting the health plan in the next step. How should you refine the setup?",
        "options": [
            "Set up separate workflows for dependents and health plans.",
            "Adjust the prompt so that the model references earlier text.",
            "Configure session variables to hold dependent details so they remain available when the health plan phase begins.",
            "Ask the user to re-enter the data every time."
        ],
        "correctAnswer": 2,
        "source": "Oracle AI Agent Studio - Session Management"
    },
    {
        "id": 51,
        "question": "Which is a typical use case for using Topics in prompts?",
        "options": [
            "Initiating agent upgrades",
            "Providing reusable instructions or constraints in agent prompts",
            "Modifying the agent's user interface",
            "Configuring additional hardware resources"
        ],
        "correctAnswer": 1,
        "source": "Oracle AI Agent Studio – Topics"
    },
    {
        "id": 52,
        "question": "What is the core difference between Agent Tracing and Prompt Tracing?",
        "options": [
            "Agent Tracing provides full visibility into usage and performance; Prompt Tracing analyzes each prompt individually.",
            "Agent Tracing provides step-by-step visualization of multi-step executions; Prompt Tracing focuses on specific generation.",
            "Agent Tracing is tied to compliance; Prompt Tracing is for debugging.",
            "There is no difference."
        ],
        "correctAnswer": 1,
        "source": "Oracle AI Agent Studio - Observability"
    },
    {
        "id": 53,
        "question": "When is a multi-agent (with Supervisor agent) configuration most appropriate?",
        "options": [
            "For increasing token usage only",
            "When the workflow is complex, modular, or requires domain specialization",
            "When editing static HTML pages",
            "When the task is a simple request with no dependencies"
        ],
        "correctAnswer": 1,
        "source": "Oracle AI Agents – Multi-Agent Orchestration"
    },
    {
        "id": 54,
        "question": "Which security privilege is required to assign access to end users for exploring AI Agents?",
        "options": [
            "ORA_FAI_MANAGE_ALL_AI_AGENTS",
            "ORA_HCM_VBCS_PWA_ENABLED",
            "HRC_ACCESS_AI_AGENT_CHAT_PRIV",
            "ORA_DR_FAI_GENERATIVE_AI_AGENT_HCM_ADMINISTRATOR_DUTY"
        ],
        "correctAnswer": 2,
        "source": "Oracle Fusion Apps Security – AI Agent Provisioning"
    },
    {
        "id": 55,
        "question": "Which statement is correct regarding Guardrails in Agent Studio?",
        "options": [
            "They ensure agents act within defined boundaries",
            "They are optional for production use",
            "They increase API call speed",
            "They adjust UI themes"
        ],
        "correctAnswer": 0,
        "source": "Oracle AI Agent Studio – Guardrails"
    },
    {
        "id": 56,
        "question": "What does the Human in the Loop feature enable in Agent Studio workflows?",
        "options": [
            "Requires automatic escalation of tasks to management",
            "Enables setting read-only access for users",
            "Requires human review or approval before an agent takes certain actions",
            "Allows agents to write and approve their own changes"
        ],
        "correctAnswer": 2,
        "source": "Oracle AI Agent Studio – Human in the Loop"
    },
    {
        "id": 57,
        "question": "What must be enabled before custom roles can be assigned for AI Studio?",
        "options": [
            "Permission Groups",
            "Real-Time Auditing",
            "BI Reporting Modules",
            "Backup Scheduling"
        ],
        "correctAnswer": 0,
        "source": "Oracle Fusion Security – Permission Groups"
    },
    {
        "id": 58,
        "question": "Which feature ensures AI Agents only access data permitted to the user?",
        "options": [
            "Prompt-length limitation",
            "Role-based access control",
            "Open API templates",
            "External plugin modules"
        ],
        "correctAnswer": 1,
        "source": "Oracle Fusion Security – RBAC"
    },
    {
        "id": 59,
        "question": "What is the main purpose of a summarization prompt in Agent Studio?",
        "options": [
            "To manage user notifications",
            "To increase the number of fields",
            "To initiate a file upload",
            "To instruct the AI agent to condense information into a concise output"
        ],
        "correctAnswer": 3,
        "source": "Oracle AI Agent Studio – Prompt Engineering"
    },
    {
        "id": 60,
        "question": "Which statement accurately describes Business Objects in AI Agent Studio?",
        "options": [
            "They provide a structure for agents to interact with Fusion data and APIs",
            "They act as placeholders for UI changes",
            "They are used for end user authentication",
            "They allow upload of text and images"
        ],
        "correctAnswer": 0,
        "source": "Oracle Fusion Apps – Business Objects"
    },
    {
        "id": 61,
        "question": "Which capability is provided by the Document Tool in AI Agent Studio?",
        "options": [
            "Direct manipulation of image files",
            "Dynamic UI form creation",
            "Execution of payroll reports",
            "Semantic search on uploaded unstructured documents"
        ],
        "correctAnswer": 3,
        "source": "Oracle AI Agent Studio – Document Tool"
    },
    {
        "id": 62,
        "question": "Which statement best describes an AI Agent in Oracle AI Agent Studio?",
        "options": [
            "An internal database backup process",
            "A business rule that triggers emails",
            "A digital worker that can automate tasks and take actions",
            "A static analytics report"
        ],
        "correctAnswer": 2,
        "source": "Oracle AI Agent Studio – Introduction"
    },
    {
        "id": 63,
        "question": "What is the core benefit of using prebuilt templates in Agent Studio?",
        "options": [
            "They require zero configuration",
            "They automatically generate employee contracts",
            "They allow faster deployment through reusable workflows",
            "They process only financial data"
        ],
        "correctAnswer": 2,
        "source": "Oracle AI Agent Studio – Templates"
    },
    {
        "id": 64,
        "question": "What is the primary purpose of an AI Agent in Oracle AI Agent Studio?",
        "options": [
            "To discard data records",
            "To create custom dashboards",
            "To automate tasks by interpreting user goals and taking actions",
            "To manage application upgrades"
        ],
        "correctAnswer": 2,
        "source": "Oracle AI Agent Studio – What Agents Do"
    },
    {
        "id": 65,
        "question": "Which is the best practice when writing prompts for Oracle AI Agent Studio agents?",
        "options": [
            "Use only short phrases",
            "Allow ambiguity to foster creativity",
            "Be explicit and specific about the agent's role, tasks, and expected outputs",
            "Include as many related instructions as possible"
        ],
        "correctAnswer": 2,
        "source": "Oracle Prompt Engineering – Best Practices"
    },
    {
        "id": 66,
        "question": "What step is required after uploading unstructured documents for AI semantic search in the Document Tool?",
        "options": [
            "Process and embed documents manually into a vector DB",
            "Enable Permission Groups for the document",
            "Share documents publicly",
            "Run the Process Agent Documents scheduled process"
        ],
        "correctAnswer": 3,
        "source": "Oracle AI Agent Studio – Document Processing"
    },
    {
        "id": 67,
        "question": "In Agent Studio, what is the Business Object Tool used for?",
        "options": [
            "Resizing user interface forms",
            "Generating marketing keywords",
            "Retrieving and transacting on Fusion business objects",
            "Processing external RSS feeds"
        ],
        "correctAnswer": 2,
        "source": "Oracle AI Agent Studio – Business Object Tool"
    },
    {
        "id": 68,
        "question": "Which agent component is described as reusable, focused on a subject area, and aligns agent responses to certain themes?",
        "options": [
            "Supervisor agent",
            "Credential Store",
            "Topic",
            "Document Tool"
        ],
        "correctAnswer": 2,
        "source": "Oracle AI Agent Studio – Topics"
    }
];
