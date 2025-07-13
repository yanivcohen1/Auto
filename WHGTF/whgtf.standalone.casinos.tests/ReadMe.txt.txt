C:\SVN\automation_tools\whgtf.telaviv>
mvn clean -q -U test -Dtest=DropdownRunner -Dbrowser=chrome -Denv=liv -Dcucumber.options="--tags @test1,@test2"  -rf :whgtf.telaviv
windows -> preference -> java -> Install jars  in install jre: edit in defalt jre arguments add: -Dbrowser=chrome -Denv=liv -DlogLevel=debug -Ddevice=galaxy_s5