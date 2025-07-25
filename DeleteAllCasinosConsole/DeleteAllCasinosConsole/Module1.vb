Imports DeleteAllCasinosConsole.Service

Module Module1


    Sub Main()
        Console.Title = "DeleteAllCasinosConsole"

        Dim i
        Dim drive_casino As String
        Dim drive_poker As String
        Dim drive_bingo As String

        Dim windowsDirectory
        windowsDirectory = Environ$("windir")
        windowsDirectory = Replace(windowsDirectory.tolower, "windows", "").ToLower

        Dim program_files = Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles)
        Dim desctop = Environment.GetFolderPath(Environment.SpecialFolder.Desktop)
        Dim start_programs = Environment.GetFolderPath(Environment.SpecialFolder.StartMenu)
        Dim documents = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData)

        Dim service As New Service

        ''''''''searching for casino directory
        drive_casino = service.search_for_casino_directory()
        drive_poker = service.search_for_poker_directory()
        drive_bingo = service.search_for_bingo_directory()


        ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''delete all casinos
        service.delete_prestige_bingo(program_files)
        service.delete_all_casinos(drive_casino, "Sky Kings Casino")
        service.delete_all_poker(drive_poker, "CDPoker")
        service.delete_all_casinos(drive_casino, "32 Vegas Casino")
        service.delete_all_casinos(drive_casino, "Amber Coast Casino")
        service.delete_all_casinos(drive_casino, "Aqua Lounge Casino")
        service.delete_all_casinos(drive_casino, "Cote dAzur Palace Casino")
        service.delete_all_casinos(drive_casino, "Diamond Club Casino")
        service.delete_all_casinos(drive_casino, "EuroGrand Casino")
        service.delete_all_casinos(drive_casino, "Joyland Casino")
        service.delete_all_casinos(drive_casino, "Kiwi Casino")
        service.delete_all_poker(drive_poker, "Kiwi Poker")
        service.delete_all_casinos(drive_casino, "New York Casino")
        service.delete_all_casinos(drive_casino, "PlayGate Casino")
        service.delete_all_poker(drive_poker, "PlayGate Poker")
        service.delete_all_casinos(drive_casino, "Prestige Casino")
        service.delete_all_poker(drive_poker, "Prestige Poker")
        service.delete_all_bingo(drive_bingo, "Ruby Bingo")
        service.delete_all_bingo(drive_bingo, "Ruby Bingo UK")
        service.delete_all_casinos(drive_casino, "USA Casino")
        service.delete_all_poker(drive_poker, "USA Poker")
        service.delete_all_casinos(drive_casino, "Fast Win Casino")
        service.delete_all_casinos(drive_casino, "Carnaval Casino")
        service.delete_all_casinos(drive_casino, "Blackpool Club Casino")
        service.delete_all_poker(drive_casino, "Blackpool Club Poker")
        service.delete_all_bingo(drive_casino, "Blackpool Club Bingo")
        service.delete_all_casinos(drive_casino, "William Hill CASINO CLUB") 'willam

        ''''''''''''''''''''''''''''''''''''''''''''''''''delete all shortcuts from desctop
        ''slylings
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\Sky Kings Casino.lnk")
        ''cdpoker
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\CDPoker.lnk")
        ''32vegas
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\32 Vegas Casino.lnk")
        ''ambercoast
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\Amber Coast Casino.lnk")
        ''aqua
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\Aqua Lounge Casino.lnk")
        ''coted
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\Côte d'Azur Palace Casino.lnk")
        ''diamond
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\Diamond Club Casino.lnk")
        ''eurogrand
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\EuroGrand Casino.lnk")
        ''joyland
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\Joyland Casino.lnk")
        ''kiwi
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\Kiwi Casino.lnk")
        ''kiwi poker
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\Kiwi Poker.lnk")
        ''new york
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\New York Casino.lnk")
        ''playgate
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\PlayGate Casino.lnk")
        ''playgate poker
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\PlayGate Poker.lnk")
        ''prestige bingo
        service.delete_shortcut(desctop & "\Prestige Bingo.lnk")
        ''prestige 
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\Prestige Casino.lnk")
        ''prestige  poker
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\Prestige Poker.lnk")
        ''ruby
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\Ruby Bingo.lnk")
        ''ruby UK
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\Ruby Bingo UK.lnk")
        ''USA
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\USA Casino.lnk")
        ''USA Poker
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\USA Poker.lnk")
        ''Fastwin
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\Fast Win Casino.lnk")
        ''Carnaval
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\Carnaval Casino.lnk")
        ''Blackpoolclub Casino
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\Blackpool Club Casino.lnk")
        ''Blackpoolclub Poker
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\Blackpool Club Poker.lnk")
        ''Blackpoolclub Bingo
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\Blackpool Club Bingo.lnk")
        'William Hill CASINO CLUB
        service.delete_shortcut(windowsDirectory & "Documents and Settings\All Users\Desktop\William Hill CASINO CLUB.lnk") 'willam

        '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Start programs
        '''''''''skykings
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Sky Kings Casino")
        '''''''''cdpoker
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\CDPoker")
        '''''''''32vegas
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\32 Vegas Casino")
        '''''''''ambercoast
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Amber Coast Casino")
        '''''''''aqua
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Aqua Lounge Casino")
        '''''''''cote
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Côte d'Azur Palace Casino")
        '''''''''diamond
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Diamond Club Casino")
        '''''''''eurogrand
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\EuroGrand Casino")
        '''''''''joyland
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Joyland Casino")
        '''''''''kiwi
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Kiwi Casino")
        '''''''''kiwi poker
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Kiwi Poker")
        '''''''''new york
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\New York Casino")
        ''''''''playgate
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\PlayGate Casino")
        ''''''''playgate poker
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\PlayGate Poker")
        ''''''''prestige bingo
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Prestige Bingo")
        ''''''''prestige
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Prestige Casino")
        ''''''''prestige poker
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Prestige Poker")
        ''''''''ruby
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Ruby Bingo")
        ''''''''ruby UK
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Ruby Bingo UK")
        '''''''USA
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\USA Casino")
        '''''''USA Poker
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\USA Poker")
        '''''''Fastwin
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Fast Win Casino")
        '''''''Carnaval
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Carnaval Casino")
        '''''''Blackpoolclub Casino
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Blackpool Club Casino")
        '''''''Blackpoolclub Poker
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Blackpool Club Poker")
        '''''''Blackpoolclub Bingo
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\Blackpool Club Bingo")
        '''''''William Hill CASINO CLUB
        service.delete_directory(windowsDirectory & "Documents and Settings\All Users\Start Menu\Programs\William Hill CASINO CLUB")

        ''''''''''''Quick launch
        ''''''skykings
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\Sky Kings Casino.lnk")
        ''''''cdpoker
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\CDPoker.lnk")
        ''''''32vegas
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\32 Vegas Casino.lnk")
        ''''''ambercoast
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\Amber Coast Casino.lnk")
        ''''''aqua
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\Aqua Lounge Casino.lnk")
        ''''''cote
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\Côte d'Azur Palace Casino.lnk")
        ''''''diamond
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\Diamond Club Casino.lnk")
        ''''''eurogrand
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\EuroGrand Casino.lnk")
        ''''''joyland
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\Joyland Casino.lnk")
        ''''''kiwi
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\Kiwi Casino.lnk")
        ''''''kiwi poker
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\Kiwi Poker.lnk")
        '''''new york
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\New York Casino.lnk")
        '''''playgate
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\PlayGate Casino.lnk")
        '''''playgate poker
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\PlayGate Poker.lnk")
        '''''prestige
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\Prestige Casino.lnk")
        '''''prestige poker
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\Prestige Poker.lnk")
        '''''ruby
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\Ruby Bingo.lnk")
        '''''ruby UK
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\Ruby Bingo UK.lnk")
        '''''USA
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\USA Casino.lnk")
        '''''USA Poker
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\USA Poker.lnk")
        '''''Fastwin
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\Fast Win Casino.lnk")
        '''''Carnaval
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\Carnaval Casino.lnk")
        '''''Blackpoolclub Casino
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\Blackpool Club Casino.lnk")
        '''''Blackpoolclub Poker
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\Blackpool Club Poker.lnk")
        '''''Blackpoolclub Bingo
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\Blackpool Club Bingo.lnk")
        '''''William Hill CASINO CLUB
        service.delete_shortcut(documents & "\Microsoft\Internet Explorer\Quick Launch\William Hill CASINO CLUB.lnk")

        ''''''''''delete from registry
        service.delete_registry_current_user("Software\Sky Kings Casino")
        service.delete_registry_current_user("Software\Club Dice Poker")
        service.delete_registry_current_user("Software\32 Vegas Casino")
        service.delete_registry_current_user("Software\Amber Coast Casino")
        service.delete_registry_current_user("Software\Aqua Lounge Casino")
        service.delete_registry_current_user("Software\Cote dAzur Palace Casino")
        service.delete_registry_current_user("Software\Diamond Club Casino")
        service.delete_registry_current_user("Software\EuroGrand Casino")
        service.delete_registry_current_user("Software\Joyland Casino")
        service.delete_registry_current_user("Software\Kiwi Casino")
        service.delete_registry_current_user("Software\Kiwi Poker")
        service.delete_registry_current_user("Software\New York Casino")
        service.delete_registry_current_user("Software\PlayGate Casino")
        service.delete_registry_current_user("Software\Playgate Poker")
        service.delete_registry_current_user("Software\Prestige Bingo")
        service.delete_registry_current_user("Software\Prestige Casino")
        service.delete_registry_current_user("Software\Prestige Poker")
        service.delete_registry_current_user("Software\Ruby Bingo")
        service.delete_registry_current_user("Software\Ruby Bingo UK")
        service.delete_registry_current_user("Software\USA Casino")
        service.delete_registry_current_user("Software\USA Poker")
        service.delete_registry_current_user("Software\Fast Win Casino")
        service.delete_registry_current_user("Software\Carnaval Casino")
        service.delete_registry_current_user("Software\Blackpool Club Casino")
        service.delete_registry_current_user("Software\blackpoolclubpoker\QuickSearch")
        service.delete_registry_current_user("Software\blackpoolclubpoker")
        service.delete_registry_current_user("Software\Blackpool Club Bingo")
        service.delete_registry_current_user("Software\William Hill CASINO CLUB") 'William

        service.delete_registry_localmachune("SOFTWARE\Sky Kings Casino")
        service.delete_registry_localmachune("SOFTWARE\Club Dice Poker")
        service.delete_registry_localmachune("SOFTWARE\32 Vegas Casino")
        service.delete_registry_localmachune("SOFTWARE\Amber Coast Casino")
        service.delete_registry_localmachune("SOFTWARE\Aqua Lounge Casino")
        service.delete_registry_localmachune("SOFTWARE\Cote dAzur Palace Casino")
        service.delete_registry_localmachune("SOFTWARE\Diamond Club Casino")
        service.delete_registry_localmachune("SOFTWARE\EuroGrand Casino")
        service.delete_registry_localmachune("SOFTWARE\Joyland Casino")
        service.delete_registry_localmachune("SOFTWARE\Kiwi Casino")
        service.delete_registry_localmachune("SOFTWARE\Kiwi Poker")
        service.delete_registry_localmachune("SOFTWARE\New York Casino")
        service.delete_registry_localmachune("SOFTWARE\PlayGate Casino")
        service.delete_registry_localmachune("SOFTWARE\Playgate Poker")
        service.delete_registry_localmachune("SOFTWARE\Prestige Bingo")
        service.delete_registry_localmachune("SOFTWARE\Prestige Casino")
        service.delete_registry_localmachune("SOFTWARE\Prestige Poker")
        service.delete_registry_localmachune("SOFTWARE\Ruby Bingo")
        service.delete_registry_localmachune("SOFTWARE\Ruby Bingo UK")
        service.delete_registry_localmachune("SOFTWARE\USA Poker")
        service.delete_registry_localmachune("SOFTWARE\USA Casino")
        service.delete_registry_localmachune("SOFTWARE\Fast Win Casino")
        service.delete_registry_localmachune("SOFTWARE\Carnaval Casino")
        service.delete_registry_localmachune("SOFTWARE\Blackpool Club Casino")
        service.delete_registry_localmachune("SOFTWARE\Blackpool Club Poker")
        service.delete_registry_localmachune("SOFTWARE\blackpoolclubpoker")
        service.delete_registry_localmachune("SOFTWARE\Blackpoolclub Bingo")
        service.delete_registry_localmachune("SOFTWARE\PTECH")
        service.delete_registry_localmachune("SOFTWARE\William Hill CASINO CLUB") 'William

        ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''delete cookies
        Dim cookies = Environment.GetFolderPath(Environment.SpecialFolder.Cookies)
        Dim cookies_files() As String
        Dim y
        Dim file_cookes As String
        cookies_files = System.IO.Directory.GetFiles(cookies)

        '''''''''''check and delete files
        For y = 0 To cookies_files.Length - 1

            file_cookes = cookies_files(y)
            If service.delete_cookie(file_cookes) = True Then
                service.delete_shortcut(file_cookes)
            End If
        Next

        'Console.WriteLine("Press 'Enter' to continue...")
        'Console.ReadLine()
    End Sub

End Module
