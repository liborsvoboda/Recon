
#$allowPort = Get-Random -InputObject 48011..48059
$blockPort = Get-Random -Minimum 48011 -Maximum 48059

#Write-Output $blockPort

#New-NetFirewallRule -DisplayName "Allow OPCUA" -Direction Outbound -RemotePort $allowPort -Protocol TCP -Action Allow
Remove-NetFirewallRule -DisplayName "Block OPCUA"
New-NetFirewallRule -DisplayName "Block OPCUA" -Direction Outbound -RemotePort $blockPort -Protocol TCP -Action Block