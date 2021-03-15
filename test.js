const issues = [
    { jiraKey: 'IMH-15475', hpCode: 'IM670920', attachments: ['adjunto1, adjunto2'] },
    { jiraKey: 'IMH-15476', hpCode: 'IM670907', attachments: ['Sin adjuntos'] }
];

let hpCodes = issues.map(issue => {return issue.attachments});
console.log(hpCodes);