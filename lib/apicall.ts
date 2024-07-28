export type StatusType = "todo" | "inProgress" | "underReview" | "finished";

export interface RecordType {
    id: string;
    title: string;
    status: StatusType;
    priority: "Low" | "Medium" | "High" | "Urgent";
    deadline: Date;
    description: string;
    favorite: boolean;
    createdAt: Date;
}

const records: RecordType[] = [
    {
        id: "1",
        title: "Develop Feature A",
        status: "todo",
        priority: "High",
        deadline: new Date("2024-09-01T12:00:00Z"),
        description:
            "Implement the main functionality for Feature A. This feature is crucial for the next release and requires thorough testing. Ensure to cover all edge cases and get feedback from the QA team.",
        favorite: false,
        createdAt: new Date("2024-07-15T08:30:00Z"),
    },
    {
        id: "2",
        title: "Design UI Mockups",
        status: "inProgress",
        priority: "Medium",
        deadline: new Date("2024-10-15T12:00:00Z"),
        description:
            "Create user interface mockups for the new dashboard. The mockups should include all main screens and user flows. Work closely with the product team to ensure all requirements are met.",
        favorite: true,
        createdAt: new Date("2024-07-16T09:00:00Z"),
    },
    {
        id: "3",
        title: "Code Review for Module B",
        status: "underReview",
        priority: "Low",
        deadline: new Date("2024-08-25T12:00:00Z"),
        description:
            "Conduct a detailed code review for Module B. Focus on code quality, potential bugs, and adherence to coding standards. Provide constructive feedback and suggest improvements where necessary.",
        favorite: false,
        createdAt: new Date("2024-07-17T10:15:00Z"),
    },
    {
        id: "4",
        title: "Setup CI/CD Pipeline",
        status: "finished",
        priority: "Urgent",
        deadline: new Date("2024-07-30T12:00:00Z"),
        description:
            "Setup a continuous integration and continuous deployment pipeline. This pipeline should automate the build, test, and deployment process. Ensure it integrates well with our existing tools and workflows.",
        favorite: true,
        createdAt: new Date("2024-07-18T11:45:00Z"),
    },
    {
        id: "5",
        title: "Database Optimization",
        status: "todo",
        priority: "Medium",
        deadline: new Date("2024-11-01T12:00:00Z"),
        description:
            "Optimize database queries and indexes to improve performance. Identify slow queries and optimize them for better efficiency. Ensure that the changes do not affect the data integrity.",
        favorite: false,
        createdAt: new Date("2024-07-19T14:30:00Z"),
    },
    {
        id: "6",
        title: "Update User Documentation",
        status: "inProgress",
        priority: "High",
        deadline: new Date("2024-08-10T12:00:00Z"),
        description:
            "Update the user documentation to reflect recent changes in the application. Ensure the documentation is clear, comprehensive, and easy to follow. Include screenshots and examples where necessary.",
        favorite: false,
        createdAt: new Date("2024-07-20T15:00:00Z"),
    },
    {
        id: "7",
        title: "Customer Feedback Analysis",
        status: "underReview",
        priority: "Low",
        deadline: new Date("2024-09-20T12:00:00Z"),
        description:
            "Analyze customer feedback from the last quarter. Identify common issues and areas for improvement. Prepare a report summarizing the findings and suggest actionable steps.",
        favorite: true,
        createdAt: new Date("2024-07-21T16:45:00Z"),
    },
    {
        id: "8",
        title: "Security Audit",
        status: "finished",
        priority: "Urgent",
        deadline: new Date("2024-07-25T12:00:00Z"),
        description:
            "Perform a comprehensive security audit of the application. Identify vulnerabilities and potential threats. Provide a detailed report with recommendations for improving security.",
        favorite: false,
        createdAt: new Date("2024-07-22T09:30:00Z"),
    },
    {
        id: "9",
        title: "Marketing Strategy Meeting",
        status: "todo",
        priority: "Medium",
        deadline: new Date("2024-08-05T12:00:00Z"),
        description:
            "Organize and conduct a meeting to discuss the marketing strategy for the upcoming product launch. Include key stakeholders from different departments. Prepare an agenda and materials for the discussion.",
        favorite: true,
        createdAt: new Date("2024-07-23T10:00:00Z"),
    },
    {
        id: "10",
        title: "Bug Fixing Sprint",
        status: "inProgress",
        priority: "High",
        deadline: new Date("2024-08-20T12:00:00Z"),
        description:
            "Address and fix the high-priority bugs reported by the QA team. Ensure that each fix is tested thoroughly before merging. Coordinate with the QA team to verify the fixes.",
        favorite: false,
        createdAt: new Date("2024-07-24T11:15:00Z"),
    },
    {
        id: "11",
        title: "API Documentation Update",
        status: "underReview",
        priority: "Low",
        deadline: new Date("2024-09-15T12:00:00Z"),
        description:
            "Review and update the API documentation. Ensure all endpoints are documented accurately, including request and response formats. Make the documentation user-friendly and easy to navigate.",
        favorite: true,
        createdAt: new Date("2024-07-25T13:45:00Z"),
    },
    {
        id: "12",
        title: "User Testing Session",
        status: "finished",
        priority: "Urgent",
        deadline: new Date("2024-07-28T12:00:00Z"),
        description:
            "Conduct a user testing session to gather feedback on the new features. Prepare test scenarios and gather feedback from participants. Analyze the results and identify areas for improvement.",
        favorite: false,
        createdAt: new Date("2024-07-26T14:30:00Z"),
    },
    {
        id: "13",
        title: "Refactor Legacy Code",
        status: "todo",
        priority: "High",
        deadline: new Date("2024-10-01T12:00:00Z"),
        description:
            "Refactor the legacy codebase to improve readability and maintainability. Ensure the refactoring does not introduce new bugs. Write unit tests to cover the refactored code.",
        favorite: true,
        createdAt: new Date("2024-07-27T15:00:00Z"),
    },
    {
        id: "14",
        title: "Performance Testing",
        status: "inProgress",
        priority: "Medium",
        deadline: new Date("2024-08-30T12:00:00Z"),
        description:
            "Conduct performance testing to identify bottlenecks in the application. Use appropriate tools and methods to measure performance. Prepare a report with findings and recommendations.",
        favorite: false,
        createdAt: new Date("2024-07-28T16:45:00Z"),
    },
    {
        id: "15",
        title: "Update Privacy Policy",
        status: "underReview",
        priority: "Low",
        deadline: new Date("2024-09-25T12:00:00Z"),
        description:
            "Review and update the privacy policy to comply with recent regulations. Ensure the policy is clear and easy to understand. Communicate changes to users and stakeholders.",
        favorite: true,
        createdAt: new Date("2024-08-02T14:30:00Z"),
    },
];

export const getTasksFromDB = async () => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 0));

    // Return the records
    return records;
};
