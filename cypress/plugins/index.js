const {createJiraIssue} = require('./jiraReporter')

module.exports = (on, config) => {
  on('task', {
    createJiraIssue({ summary, description }) {
      return createJiraIssue({ summary, description })
    }
  })
}