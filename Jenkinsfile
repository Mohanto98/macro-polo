pipeline {
  agent any
  tools {
    gradle 'Gradle-9.7.0-rc-1'
  }
  stages {
    stage("run frontend"){
      steps {
        echo 'Running frontend with yarn...'
        nodejs('Node-26.5.0') {
          sh 'yarn install'
        }
      }
    }
    stage("run backend"){
      steps {
        echo 'Running backend with gradle...'
        withGradle() {
          sh './gradlew -v'
        }
      }
    }
  }
}
