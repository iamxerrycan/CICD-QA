const axios = require('axios');

async function createJiraIssue({ summary, description }) {
  try {
    const res = await axios.post(
      'https://your-domain.atlassian.net/rest/api/3/issue',
      {
        fields: {
          project: { key: 'MMMMA' },
          summary,
          description,
          issuetype: { name: 'Bug' }
        }
      },
      {
        auth: {
          username: 'your-email@gmail.com',
          password: 'JIRA_API_TOKEN' 
        },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Created Jira Issue:', res.data.key);
    return true;
  } catch (error) {
    console.error('Jira Error:', error.message);
    return false;
  }
}

module.exports = { createJiraIssue };
