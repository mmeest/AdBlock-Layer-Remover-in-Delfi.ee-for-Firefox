<div>
  <p align="center">
    <img src="https://github.com/mmeest/AdBlock-Layer-Remover-in-Delfi.ee-for-Firefox/blob/main/del.png" width="220px">
  </p>
</div>


# Firefox-Extension-To-Remove-AdBlock-Layer-In-Delfi.ee
Removes Delfi Ad-Block layer on Firefox


To load temporary extension from local file to Firefox open:

```
about:debugging#/setup
```

Select 'This Firefox' and 'Load Temporary Add-on...'
Select file from your extension folder.

---

Before you can install your own extensions you need id or key in your Extension's JSON file:

```
"browser_specific_settings": {
      "gecko": {
        "id": "searchify@example.com"
      }
    },    
```

To install Firefox extension from local file open:

```
about:config
```

Click 'Accept the Risk and Continue'

set 'xpinstall.signatures.required' to false  

Open:

```
about:addons
```

Click on gear icon

Select 'Install Add-on from File...'

This accepts file archives in format '.xpi', '.jar' and '.zip'

__________________________________

v1.1

Added

```
"all_frames": true
```

to 'manifest.json' for delfi subsites.
