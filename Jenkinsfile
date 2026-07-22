pipeline {
  agent any
  tools {
    gradle 'Gradle'
  }
  stages {
    stage("run frontend"){
      steps {
        echo 'Running frontend with yarn...'
        nodejs('Node-22.23.1') {
          sh 'npm install'
        }
      }
    }
    
  }
}
