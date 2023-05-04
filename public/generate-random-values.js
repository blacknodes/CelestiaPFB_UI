function generate() {
    const namespaceBytes = new Uint8Array(8);
    window.crypto.getRandomValues(namespaceBytes);
    const namespaceId = Array.from(namespaceBytes, (byte) =>
      byte.toString(16).padStart(2, "0")
    ).join("");
    
    const msgLength = Math.floor(Math.random() * 100);
    const msgBytes = new Uint8Array(msgLength);
    window.crypto.getRandomValues(msgBytes);
    const message = Array.from(msgBytes, (byte) =>
      byte.toString(16).padStart(2, "0")
    ).join("");
    
    document.querySelector("#namespace_id").value = namespaceId;
    document.querySelector("#message").value = message;
  }