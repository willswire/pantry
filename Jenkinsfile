pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run prod'
      }
    }
    stage('Deploy') {
      steps {
        sh 'npm deploy'
      }
    }
  }
  tools {
    nodejs 'node'
  }
}