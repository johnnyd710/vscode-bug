# vscode-bug

1. open vscode
2. set a breakpoint in [index.ts](./src/index.ts)
3. `pnpm start`
4. run debug configuration "Attach by Process ID windows"
5. breakpoints hit!
6. disconnect
7. run debug configuration "Attach by Process ID no windows"
8. breakpoints dont hit.

therefore the two launch.json configuration can't be equivalent, even though both are being run on windows:
```json
    {
      "name": "Attach by Process ID windows",
      "processId": "${command:PickProcess}",
      "request": "attach",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "type": "node",
      "windows": {
        "outFiles": [
          "/some/path/that/shouldnt/work",
        ]
      }
    }
```

```json
    {
      "name": "Attach by Process ID no windows",
      "processId": "${command:PickProcess}",
      "request": "attach",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "type": "node",
      "outFiles": [
        "/some/path/that/shouldnt/work",
      ]
    }
```
