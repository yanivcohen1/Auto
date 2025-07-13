README for TestManager
==========================
gradlew bootRun
gradlew -Pprod bootRun
gradlew -Pprod bootRepackage
java -jar build\libs\testmanager-0.1-SNAPSHOT.war --spring.profiles.active=prod
java -Xdebug -Xrunjdwp:server=y,transport=dt_socket,address=4000,suspend=n -jar build\libs\testmanager-0.1-SNAPSHOT.war --spring.profiles.active=prod

./gradlew
sudo ./gradlew -DDEBUG=true -PnodeInstall
yo jhipster:entity Test
./gradlew -Pprod clean bootRepackage
java -jar build/libs/jhipster-angular-js-0.0.1-SNAPSHOT.war
java -Xdebug -Xrunjdwp:server=y,transport=dt_socket,address=4000,suspend=n -jar build\libs\testmanager-0.1-SNAPSHOT.jar --spring.profiles.active=prod

./gradlew -DDEBUG=true -PnodeInstall

bootRun {
		// gradlew -DDEBUG=true
		if (System.getProperty('DEBUG', 'false') == 'true') {
			println 'A message debug run'
			jvmArgs '-Xdebug',
				'-Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=9009'
		}
}

//for linux
yarn_install {
	args = ['--ignore-engines']
}