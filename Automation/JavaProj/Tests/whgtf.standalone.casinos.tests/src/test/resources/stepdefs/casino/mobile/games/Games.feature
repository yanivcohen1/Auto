@openMgpGames
Feature: Games
	As a new user I want to be able open games
	
Scenario:
	Given login to casino
	
Scenario Outline: Casino
	Given open URL "<casinoUrl>" is this Mgp Game "<MgpGame>"
	
    Examples:
		| casinoUrl | MgpGame |
| Ace Ventura	    | false   |
| Leprechaun's Luck	    | false   |
| Magical Stacks	    | false   |
| Ocean Princess	    | false   |
| Thor	    | false   |
| Wild Spirit	    | false   |
| Top Trump Celebs	    | false   |
| Forest of Wonders	    | false   |
| Archer	    | false   |
| Cowboys and Aliens	    | false   |
| Adventures in Wonderland Deluxe	    | false   |
| Atlantis Queen	    | false   |
| 3 Card Brag	    | false   |
| Daring Dave and the Eye of Ra	    | false   |
| Captain America - The First Avenger	    | false   |
| Top Gun	    | false   |
| Fei Cui Gong Zhu	    | false   |
| Dolphin Reef	    | false   |
| Funky Fruits farm	    | false   |
| Life of Brian	    | false   |
| Purple Hot	    | false   |
| Vikingmania	    | false   |
| Winnings of Oz	    | false   |
| Wings Of Gold	    | false   |
| Greatest Odyssey	    | false   |
| The Glass Slipper	    | false   |
| Football Rules	    | false   |
| Funky Monkey	    | false   |
| Piggies and the Wolf	    | false   |
| Golden Games	    | false   |
| Thai Temple	    | false   |
| Rocky	    | false   |
| Fortunes of the Fox	    | false   |
| Fairest of them All	    | false   |
| Cops n' Bandits	    | false   |
| Bounty of the Beanstalk	    | false   |
| Cat in Vegas	    | false   |
| Who Wants To Be A Millionaire	    | false   |
| Sinbad's Golden Voyage	    | false   |
| X-Men 50 Lines	    | false   |
| Nian Nian You Yu	    | false   |
| The Riches of Don Quixote	    | false   |
| Chests of Plenty	    | false   |
| Wild Gambler 2 Arctic Adventure	    | false   |
| Marilyn Monroe	    | false   |
| Heart of the Jungle	    | false   |
| Funky Fruits	    | false   |
| Full Moon Fortunes	    | false   |
| Crazy-7	    | false   |
| Cherry Love	    | false   |
| Cat Queen	    | false   |
| Bonus Bears	    | false   |
| Arctic Treasure	    | false   |
| Easter Surprise	    | false   |
| Amazon WIld	    | false   |
| Battle Of The Gods	    | false   |
| Esmeralda	    | false   |
| Silver Bullet	    | false   |
| A Night Out	    | false   |
| Baccarat	    | false   |
| Beach Life	    | false   |
| Blackjack Switch	    | false   |
| Captain's Treasure	    | false   |
| Casino Hold Em	    | false   |
| Chinese Kitchen	    | false   |
| Dr Love More	    | false   |
| Everybody's Jackpot	    | false   |
| Fantastic Four 50 lines	    | false   |
| Football Carnival	    | false   |
| Frankie Dettori's Magic Seven	    | false   |
| Frankie Dettori's Magic Seven Jackpot	    | false   |
| Geisha Story	    | false   |
| Gladiator Jackpot	    | false   |
| Great Blue	    | false   |
| Halloween Fortune	    | false   |
| Highway Kings	    | false   |
| The Incredible Hulk	    | false   |
| Ice Run	    | false   |
| Irish Luck	    | false   |
| Iron Man 2	    | false   |
| Iron Man 3	    | false   |
| Jackpot Giant	    | false   |
| Jacks or Better Multi-Hand	    | false   |
| KONG THE EIGHTH WONDER OF THE WORLD	    | false   |
| Lotto Madnes	    | false   |
| Mobile Blackjack	    | false   |
| Mobile Desert Treasure	    | false   |
| Mobile Premium Roulette	    | false   |
| Monty Python’s Spamalot	    | false   |
| Mr. Cashback	    | false   |
| Panther Moon	    | false   |
| Penguin Vacation	    | false   |
| Pink Panther	    | false   |
| Plenty O’ Fortune	    | false   |
| Samba Brazil	    | false   |
| Santa Surprise	    | false   |
| Secrets of the Amazon	    | false   |
| Sherlock Mystery	    | false   |
| Silent Samurai	    | false   |
| Spider-Man: Attack of the Green Goblin	    | false   |
| Streak of Luck	    | false   |
| Sweet Party	    | false   |
| Thai Paradise	    | false   |
| The Avengers	    | false   |
| The Three Musketeers and the Queen’s Diamond	    | false   |
| Vacation Station Deluxe	    | false   |
| White King	    | false   |
| Wild Gambler	    | false   |
| Wu Long	    | false   |
| Zhao Cai Jin Bao	    | false   |
| Golden Tour	    | false   |
| Catwalk	    | false   |
| Dragon Kingdom	    | false   |
| Hawaiian Treasure	    | false   |
| Fountain Of Youth	    | false   |
| Jungle Trouble	    | false   |
| Land Of Gold	    | false   |
| Neptunes Kingdom	    | false   |
| Wacky Waters	    | false   |
| Bermuda Triangle	    | false   |
| Haunted House	    | false   |
| Pinball Roulette	    | false   |
| Premium European Roulette	    | false   |
| Nostradamus	    | false   |
| Jekyll and Hyde	    | false   |
| Firemen	    | false   |
| Innocence or Temptation	    | false   |
| The Love Boat™	    | false   |
| Bai Shi	    | false   |
| Juicy Booty	    | false   |
| Spin A Win	    | false   |
| Furious Four	    | false   |
| king of Olympus	    | false   |
| John Wayne™	    | false   |
| Spud O´Reilly´s	    | false   |
| Age of the Gods	    | false   |
| World Football Stars 2014	    | false   |
| Blackjack Multihand	    | true    |
| Chicago Streets Scratch	    | true    |
| Club Night	    | true    |
| Classic Roulette	    | true    |
| Fish-O-Rama	    | true    |
| Gold Rally	    | true    |
| Iron Man 2 Scratch	    | true    |
| Love Match Scratch	    | true    |
| Pink Panther Scratch	    | true    |
| Rocky Scratch	    | true    |
| Safari Heat	    | true    |
| Santa’s Gifts	    | true    |
| Vacation Station	    | true    |
| Wanted	    | true    |

Scenario: Casino
    Given close browser

