Imports System
Imports Microsoft.Win32
Imports System.Threading


Public Class Service

    Public Function search_for_casino_directory() As String
        Dim drive As String
        Dim casino_found_flag As Boolean = False

        If System.IO.Directory.Exists("c:\casino") = True Then
            drive = "c:\"
            casino_found_flag = True
            Return drive
            Exit Function
        Else
            If System.IO.Directory.Exists("d:\casino") = True Then
                drive = "d:\"
                casino_found_flag = True
                Return drive
                Exit Function
            Else
                If System.IO.Directory.Exists("e:\casino") = True Then
                    drive = "e:\"
                    casino_found_flag = True
                    Return drive
                    Exit Function
                End If
            End If
        End If
        If casino_found_flag = False Then
            drive = "Not found"
            Return drive
        End If
    End Function

    Public Function search_for_poker_directory() As String
        Dim drive As String
        Dim poker_found_flag As Boolean = False

        If System.IO.Directory.Exists("c:\poker") = True Then
            drive = "c:\"
            poker_found_flag = True
            Return drive
            Exit Function
        Else
            If System.IO.Directory.Exists("d:\poker") = True Then
                drive = "d:\"
                poker_found_flag = True
                Return drive
                Exit Function
            Else
                If System.IO.Directory.Exists("e:\poker") = True Then
                    drive = "e:\"
                    poker_found_flag = True
                    Return drive
                    Exit Function
                End If
            End If
        End If
        If poker_found_flag = False Then
            drive = "Not found"
            Return drive
        End If
    End Function

    Public Function search_for_bingo_directory() As String
        Dim drive As String
        Dim bingo_found_flag As Boolean = False

        If System.IO.Directory.Exists("c:\bingo") = True Then
            drive = "c:\"
            bingo_found_flag = True
            Return drive
            Exit Function
        Else
            If System.IO.Directory.Exists("d:\bingo") = True Then
                drive = "d:\"
                bingo_found_flag = True
                Return drive
                Exit Function
            Else
                If System.IO.Directory.Exists("e:\bingo") = True Then
                    drive = "e:\"
                    bingo_found_flag = True
                    Return drive
                    Exit Function
                End If
            End If
        End If

        If bingo_found_flag = False Then
            drive = "Not found"
            Return drive
        End If
    End Function

    Sub delete_prestige_bingo(ByVal program_files)
        console_write("Delete :" & "Prestige Bingo")

        If System.IO.Directory.Exists(program_files & "\Prestige Bingo") = True Then
            Try
                System.IO.Directory.Delete(program_files & "\Prestige Bingo", True)
            Catch ex As Exception
                Console.WriteLine(ex.ToString)
            End Try
        End If
    End Sub

    Sub delete_all_casinos(ByVal drive_casino As String, ByVal casino_name As String)
        console_write("Delete :" & casino_name)

        '''''''''''delete all casino programs
        If drive_casino <> "Not found" Then
            If System.IO.Directory.Exists(drive_casino & "casino\" & casino_name) = True Then
                Try
                    System.IO.Directory.Delete(drive_casino & "casino\" & casino_name, True)
                Catch ex As Exception
                    Console.WriteLine(ex.ToString)
                End Try
            End If
        End If
    End Sub


    Sub delete_all_poker(ByVal drive_poker As String, ByVal poker_name As String)
        console_write("Delete :" & poker_name)

        '''''''''''delete all poker programs
        If drive_poker <> "Not found" Then
            If System.IO.Directory.Exists(drive_poker & "poker\" & poker_name) = True Then
                Try
                    System.IO.Directory.Delete(drive_poker & "poker\" & poker_name, True)
                Catch ex As Exception
                    Console.WriteLine(ex.ToString)
                End Try
            End If
        End If
    End Sub


    Sub delete_all_bingo(ByVal drive_bingo As String, ByVal bingo_patch As String)
        console_write("Delete :" & bingo_patch)

        '''''''''''delete all bingo programs
        If drive_bingo <> "Not found" Then
            If System.IO.Directory.Exists(drive_bingo & "bingo\" & bingo_patch) = True Then
                Try
                    System.IO.Directory.Delete(drive_bingo & "bingo\" & bingo_patch, True)
                Catch ex As Exception
                    Console.WriteLine(ex.ToString)
                End Try
            End If
        End If
    End Sub

    Sub delete_shortcut(ByVal patch As String)
        console_write("Delete :" & patch)

        Try
            ''''''skykings
            If System.IO.File.Exists(patch) Then
                System.IO.File.Delete(patch)
            End If
        Catch ex As Exception
            Console.WriteLine(ex.ToString)
        End Try
    End Sub

    Sub delete_directory(ByVal patch As String)
        console_write("Delete :" & patch)

        Try
            If System.IO.Directory.Exists(patch) Then
                System.IO.Directory.Delete(patch, True)
            End If
        Catch ex As Exception
            Console.WriteLine(ex.ToString)
        End Try
    End Sub

    Sub delete_registry_current_user(ByVal patch As String)
        console_write("Delete registry:" & patch)

        Try
            Registry.CurrentUser.DeleteSubKey(patch)
        Catch ex As Exception
        End Try
    End Sub

    Sub delete_registry_localmachune(ByVal patch As String)
        console_write("Delete registry:" & patch)

        Try
            Registry.LocalMachine.DeleteSubKey(patch)
        Catch ex As Exception
        End Try
    End Sub

    Public Function delete_cookie(ByVal filename) As Boolean
        If InStr(filename, "32vegas") > 0 Or InStr(filename, "casino") > 0 Or InStr(filename, "poker") > 0 Or InStr(filename, "bingo") > 0 Or InStr(filename, "palace") > 0 Or InStr(filename, "eurogrand") > 0 Or InStr(filename, "fastwin") > 0 Then
            Return True
        Else
            Return False
        End If
    End Function

    Public Sub console_write(ByVal message As String)
        Console.WriteLine(message)
    End Sub

End Class
