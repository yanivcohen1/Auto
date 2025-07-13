cd C:\SVN\BAU_Automation_Tests\trunk\BauAutomationTests
cmd /c buildCommon.bat
cmd /c ClientsPom.bat RunTestsOneByOne\BuildClients.xml
cmd /c ClientsPom.bat RunTestsOneByOne\21NovaClientEn.xml
cmd /c ClientsPom.bat RunTestsOneByOne\21NovaClientDe.xml
cmd /c ClientsPom.bat RunTestsOneByOne\21NovaClientRu.xml
cmd /c ClientsPom.bat RunTestsOneByOne\21NovaWebEn.xml
cmd /c ClientsPom.bat RunTestsOneByOne\21NovaWebDe.xml
cmd /c ClientsPom.bat RunTestsOneByOne\21NovaWebRu.xml
cmd /c ClientsPom.bat RunTestsOneByOne\21NovaWebLoginEn.xml
cmd /c ClientsPom.bat RunTestsOneByOne\21NovaWebLoginDe.xml
cmd /c ClientsPom.bat RunTestsOneByOne\21NovaWebLoginRu.xml
cmd /c ClientsPom.bat RunTestsOneByOne\Tracing.xml