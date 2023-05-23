step1: npm install
step2:npm init playwright@latest
pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                // sh "sudo su -"
                git credentialsId: '123456', url: 'https://SquadWareOne@dev.azure.com/SquadWareOne/squadware-automation/_git/squadware-automation'
            }
        }
        stage('Test') {
            steps {
                dir('/var/lib/jenkins/workspace/Squadware_automation'){
                sh 'npm install'
                sh 'npm run "$scripts"'
                }
            }
        }
        stage('Update GIT') {
          steps {
            script {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    withCredentials([usernamePassword(credentialsId: '123456',
                    passwordVariable: 'crtnoplltmyccrlsm274v6xtv3mikx6fdwyn2nabxxo4qymz224q', usernameVariable: 'tuuvv.uit')]) {
                        sh "git config user.email tuuvv.uit@gmail.com"
                        sh "git config user.name tuuvv.uit"
                        sh "git add ."
                        sh "git commit -m 'Triggered Build: ${env.BUILD_NUMBER}'"
                        sh "git push https://tuuvv.uit:crtnoplltmyccrlsm274v6xtv3mikx6fdwyn2nabxxo4qymz224q@github.com/SquadWareOne/squadware-automation/_git/squadware-automation"
                    }
                }
              }
          }
        }
    }
}