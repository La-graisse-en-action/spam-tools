/**
 * 01-2024 - This file is use to send a message using the
 * elements of the Telegram Web interface by inspect devtools
 * Maybe in the future will change the elements on the telegram web page
 * author: @mrLuisFer
 */

/**
 * For basic usage you can pass a string or an array of strings
 * to send the message line by line like a spamming tool
 *
 * To use, you need to open the telegram web page, press F12 or Inspect option
 * an paste this code on the console tab, in the params of this function you can pass the message to send
 * @param {string | string[]} textToSend
 */
function sendMessage(textToSend) {
  const inputMessage = document.getElementsByClassName(
    "input-message-input"
  )[0];
  const sendButton = document.getElementsByClassName("btn-send")[0];
  /** @type {string[]} messageContent */
  let messageContent = [];

  /**
   * If the elements are not found in the DOM then throw an error
   */
  if (!inputMessage) throw new Error("Input message not found");
  if (!sendButton) throw new Error("Send button not found");

  try {
    if (Array.isArray(textToSend)) {
      messageContent = textToSend;
    } else if (typeof textToSend === "string") {
      const messageFixed = textToSend.split("\n").map((line) => line.trim());
      messageContent = messageFixed;
    }

    messageContent.forEach((lyric) => {
      /**
       * This timeout is to avoid the telegram to block the account
       * or to avoid the telegram to detect the spam message
       * It is optional, you can remove it if you want
       */
      setTimeout(() => {
        inputMessage.textContent = lyric;
        inputMessage.dispatchEvent(new Event("input", { bubbles: true }));
        sendButton.click();
      }, 1000);
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = sendMessage;
