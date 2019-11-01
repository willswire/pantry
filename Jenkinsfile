pipeline {
  agent any
  stages {
    stage('Install Packages') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build Angular') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      steps {
        sshPublisher(
          masterNodeName: '',
          paramPublish: null,
          publishers: [
            sshPublisherDesc(
              configName: 'pantry-api-server', 
              transfers: [
                sshTransfer(
                  excludes: '', 
                  flatten: false, 
                  cleanRemote: true,
                  makeEmptyDirs: true, 
                  noDefaultExcludes: true, 
                  patternSeparator: '[, ]+',  
                  remoteDirectorySDF: false, 
                  removePrefix: 'dist/', 
                  sourceFiles: 'dist/**')
                  ], 
                usePromotionTimestamp: false, 
                useWorkspaceInPromotion: false, 
                verbose: true
                )])
      }
    }
  }
  tools {
    nodejs 'node'
  }
}