C:\SVN\automation_tools\whgtf.telaviv>
mvn clean -q -U test -Dtest=DropdownRunner -Dbrowser=chrome -Denv=liv -Dcucumber.options="--tags @test1,@test2"