export const contextMonitor = async (a) => {
    const {client}=a
    await client.app.log({
        body: {
      service: "contextMonitor",
        level: "info",
        message: "Context monitor plugin initialized",
        extra: { a  },
    },
    })
  /* await client.app.log({
    body: {
      service: "contextMonitor",
        level: "info",
        message: "directory && worktree info",
        extra: { directory, worktree  },
    },
  })

  await client.app.log({
    body: {
        service: "contextMonitor",
        level: "info",
        message:"project info",
        extra: { project  },
    }
  })

  await client.app.log({
    body: {
        service: "contextMonitor",
        level: "info",
        message:"client info",
        extra: { client  },

    }
  })

  await client.app.log({
    body: {
        service: "contextMonitor",
        level: "info",
        message:"$ info",
        extra: { $  },
    }
  }) */


  return {
    // Hook implementations go here
  }
}

