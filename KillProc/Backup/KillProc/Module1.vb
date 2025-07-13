Imports System.Diagnostics
Imports System

Module Module1



    Sub KillIT()

        Dim Prc As Process()
        Dim PrcNAme As New Generic.List(Of String)
        Dim ar As Char() = "["
        Try
            Prc = Process.GetProcesses(System.Environment.MachineName.ToString)
            Dim i As Integer
            For i = 0 To Prc.Length - 1
                Try
                    PrcNAme.Add(Prc(i).MainModule.ModuleName)
                Catch ex As Exception
                End Try
            Next
            For i = 0 To Prc.Length - 1
                Dim b As String
                Try
                    If Prc(i).MainModule.ModuleName <> "" Then
                        Dim a As String = Prc(i).MainModule.ModuleName.ToString.ToLower()
                        Try
                            b = Prc(i).MainWindowTitle.ToString.ToLower()
                        Catch ex As Exception
                            b = a
                        End Try
                        a.TrimEnd(ar)
                        ''''' !!!!!!!!!!!!!!!!!!!
                        '' !! CareFull!!!  
                        ''Try Nota Kill QTP Proc.... 
                        '( Proc.window.title.contains("setup") Is true...) (: 
                        ' ^_^ - Watch it.
                        ''''''!!!!!!!!!!!!!!!!!!!
                        If (InStr(b, "casino") And InStr(b, "setup")) Or InStr(a, "casino") Or a = "setupcasino.exe" Or a = "casino.exe" Or a = "iexplore.exe" Then
                            Prc(i).Kill()
                        End If
                        ''''' !!!!!!!!!!!!!!!!!!!
                        '' !! CareFull!!!  
                        ''Try Nota Kill QTP Proc.... 
                        '( Proc.window.title.contains("setup") Is true...) (: 
                        ' ^_^ - Watch it.
                        ''''''!!!!!!!!!!!!!!!!!!!
                    End If
                Catch ex As Exception
                End Try
            Next
        Catch
        End Try
        Try
            Prc = Process.GetProcessesByName("casino.exe", System.Environment.MachineName.ToString)
            Dim i As Integer
            For i = 0 To Prc.Length - 1
                Prc(i).Kill()
            Next
        Catch
        End Try
    End Sub
    Sub Main()
        KillIT()
    End Sub

End Module
