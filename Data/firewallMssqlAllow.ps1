
Remove-NetFirewallRule -DisplayName "Block MSSQL"
#New-NetFirewallRule -DisplayName "Block MSSQL" -Direction Outbound -RemotePort 1433 -Protocol TCP -Action Block