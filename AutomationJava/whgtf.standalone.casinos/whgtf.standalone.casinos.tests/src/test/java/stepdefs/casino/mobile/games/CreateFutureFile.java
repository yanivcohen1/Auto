package stepdefs.casino.mobile.games;

import com.wh.auto.common.Utility;
import cucumber.api.java.en.Given;
import stepdefs.casino.mobile.games.ParsingGamesXml.GameType;
import stepdefs.shared.SharedSteps;

public class CreateFutureFile {

	@Given("^Games Base URL$")
	public void games_Base_URL() throws Throwable {
		SharedSteps.setCloseBrowser(false);
		//Utility.getFilePathFromResource("/stepdefs/casino/Games/Games.feature");
		//String futureContent = Utility.readFile(Utility.getFilePathFromResource("/cucumber/features/Games.feature"));
		String currentDir = System.getProperty("user.dir");
		String future_file = currentDir + "/src/test/resources/cucumber/features/Games.feature";
		String futureContent = Utility.readFile(future_file);
		
		ParsingGamesXml parsing = new ParsingGamesXml();
		String[] NgmGames = parsing.gameParser(GameType.NGM);
		String[] MgpGames = parsing.gameParser(GameType.MGP);
		for (int i = 0; i < NgmGames.length; i++) {
			if (i == 0) {
				futureContent = futureContent + "| " + NgmGames[i] + "	    | false   |";
			}else{
				if (!NgmGames[i].contains("Not In List")) {
					futureContent = futureContent + Utility.getNewline() + "| " + NgmGames[i]
							+ "	    | false   |";
				}
			}
		}
		
		for (int i = 0; i < MgpGames.length; i++) {
			if (!MgpGames[i].contains("Not In List")) {
				futureContent = futureContent + Utility.getNewline() + "| " + MgpGames[i] + "	    | true    |";
			}
		}
		
		futureContent =  futureContent + Utility.getNewline() + Utility.getNewline() +
				"Scenario: Casino" + 
					Utility.getNewline() + "    Given close browser" + Utility.getNewline();
		String featureFile = currentDir + "/src/test/resources/stepdefs/casino/mobile/games/Games.feature";
		Utility.writeTofile(featureFile, futureContent, false);
		//Utility.getFilePathFromResource("/stepdefs/casino/Games/Games.feature"),
	}
	
}
