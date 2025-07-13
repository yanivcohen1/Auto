C:\SVN\automation_tools\whgtf.telaviv>
mvn clean -q -U test -Dtest=DropdownRunner -Dbrowser=chrome -Denv=live -Dcucumber.options="--tags @test1,@test2"  -rf :whgtf.telaviv
mvn clean -q -U test -Dtest=ExtendTestRunner -Denv=live -Dbrowser=chrome -Ddevice=iPhone6Emulator -Dcucumber.options="--tags @EgEnLogin"
windows -> preference -> java -> Install jars  in install jre: edit in defalt jre arguments add: -Dbrowser=chrome -Denv=liv -DlogLevel=debug -Ddevice=galaxy_s5