// const mockResponses: Record<string, string> = {
//     "file1.txt": `Hello world! : 2024-02-22 14:35:30 UTC
//     Goodbye world! : 2024-02-22 16:35:30 UTC
//     Hello? : 2024-02-22 08:35:30 UTC
//    Hi : 2024-02-22 12:35:30 UTC`,
//     "file2.txt": `How are you doing ? : 2024-02-22 13:59:30 UTC
//     Fine : 2024-02-22 12:44:30 UTC
//     How about you ? : 2024-02-22 22:35:30 UTC
//     Same : 2024-02-22 07:39:30 UTC`,
//     "file3.txt": `Have you seen high elves ? : 2022-02-22 14:35:30 UTC
//     HESOYAM : 2023-02-22 14:35:30 UTC
//     BAGUVIX : 2021-02-22 14:35:30 UTC
//     THERE IS NO SPOON : 2020-02-22 14:35:30 UTC`,
//   };

// //   const gether = mockResponses['file1.txt']
// //   console.log(gether);

// function random(min: number, max: number): number{
//     const mockResponses: Record<string, string> = {
//         "file1.txt": `Hello world! : 2024-02-22 14:35:30 UTC
//         Goodbye world! : 2024-02-22 16:35:30 UTC
//         Hello? : 2024-02-22 08:35:30 UTC
//        Hi : 2024-02-22 12:35:30 UTC`,
//         "file2.txt": `How are you doing ? : 2024-02-22 13:59:30 UTC
//         Fine : 2024-02-22 12:44:30 UTC
//         How about you ? : 2024-02-22 22:35:30 UTC
//         Same : 2024-02-22 07:39:30 UTC`,
//         "file3.txt": `Have you seen high elves ? : 2022-02-22 14:35:30 UTC
//         HESOYAM : 2023-02-22 14:35:30 UTC
//         BAGUVIX : 2021-02-22 14:35:30 UTC
//         THERE IS NO SPOON : 2020-02-22 14:35:30 UTC`,
//       };

// var resoult = '';
// for(let i = min + 1; i < max; i++){
// if(i % 3 === 0 && i % 5 === 0){
// resoult += mockResponses['file1.txt'];
// }else if(i % 3 === 0){
// resoult += mockResponses['file2.txt'];
// }else if(i % 5 === 0){
// resoult += mockResponses['file3.txt'];
// }else{
//     resoult += i.toString();
// }
// }


// console.log(resoult.trim());
// var int = Math.floor(Math.random() * (max - min + 1)) + min;

// return int;
// }

// var RandomInt = random(1,16);
// console.log(RandomInt);


//   const mockFetch = async (
//     filePath: string,
//     params?: { body: string; method: string }
//   ): Promise<string> => {
//     if (params?.method === "POST") return "";
//     return mockResponses[filePath] ?? "";
//   };
  
//   class Parser {
//     constructor() {}
//     async getContent(file: string): Promise<
//       {
//         message: string;
//         timestamp: string;
//       }[]
//     > {
//       const res = await mockFetch(file);
//       const messages = res.split("\n");
//       const content: { message: string; timestamp: string }[] = [];
//       for (let i = 0; i < messages.length; i++) {
//         const [message, timestamp] = messages[i].split(":");
//         content.push({ message, timestamp });
//       }
//       return content;
//     }
//     async saveContent(
//       messages: { message: string; timestamp: string }[],
//       file: string
//     ) {
//       const waitGroup: Promise<any>[] = [];
//       for (let i = 0; i < messages.length; i++) {
//         const promise = new Promise<void>(async (resolve) => {
//           await new Promise<void>((resolve) =>
//             setTimeout(() => resolve(), Math.random() * 5 * 1000)
//           );
//           await mockFetch(file, {
//             body: JSON.stringify({
//               ...messages[i],
//               type: messages[i].message.length > 8 ? "long" : "short",
//             }),
//             method: "POST",
//           });
//           console.log(
//             `Saved message - ${messages[i].message} to ${file} as ${
//               messages[i].message.length > 8 ? "long" : "short"
//             }`
//           );
//         });
//         waitGroup.push(promise);
//       }
//       await Promise.all(waitGroup);
//     }
//   }
  
//   const main = async () => {
//     const files = {
//       "file1.txt": "out1.txt",
//       "file2.txt": "out2.txt",
//       "file3.txt": "out3.txt",
//     };
//     const parser = new Parser();
//     const waitGroup: Promise<any>[] = [];
  
//     for (const [input, output] of Object.entries(files)) {
//       const promise = new Promise<void>((resolve) => {
//         parser
//           .getContent(input)
//           .catch((error) => {
//             console.error(`Error while getting file ${input} - ${error}`);
//             return [];
//           })
//           .then((messages) => parser.saveContent(messages, output))
//           .catch((error) => {
//             console.error(`Error while reading file ${input} - ${error}`);
//           })
//           .then(resolve);
//       });
//       waitGroup.push(promise);
//     }
//     await Promise.all(waitGroup);
//   };
  
//   main();



const mockResponses: Record<string, string> = {
    "file1.txt": `Hello world! : 2024-02-22 14:35:30 UTC
  Goodbye world! : 2024-02-22 16:35:30 UTC
  Hello? : 2024-02-22 08:35:30 UTC
  Hi : 2024-02-22 12:35:30 UTC`,
    "file2.txt": `How are you doing ? : 2024-02-22 13:59:30 UTC
  Fine : 2024-02-22 12:44:30 UTC
  How about you ? : 2024-02-22 22:35:30 UTC
  Same : 2024-02-22 07:39:30 UTC`,
    "file3.txt": `Have you seen high elves ? : 2022-02-22 14:35:30 UTC
  HESOYAM : 2023-02-22 14:35:30 UTC
  BAGUVIX : 2021-02-22 14:35:30 UTC
  THERE IS NO SPOON : 2020-02-22 14:35:30 UTC`,
  };
  
  const mockFetch = async (
    filePath: string,
    params?: { body: string; method: string }
  ): Promise<string> => {
    if (params?.method === "POST") return "";
    return mockResponses[filePath] ?? "";
  };
  
  class Message {
    constructor(public message: string, public timestamp: string) {}
  }
  
  class Parser {
    async getContent(file: string): Promise<Message[]> {
      const res = await mockFetch(file);
      const messages = res.split("\n");
      return messages.map(line => {
        const [message, timestamp] = line.split(" : ");
        return new Message(message.trim(), timestamp.trim());
      });
    }
  
    async saveContent(messages: Message[], file: string): Promise<void> {
      const waitGroup: Promise<void>[] = messages.map(async message => {
        await this.randomWait();
        await mockFetch(file, {
          body: JSON.stringify({
            ...message,
            type: message.message.length > 8 ? "long" : "short",
          }),
          method: "POST",
        });
        console.log(
          `Saved message - ${message.message} to ${file} as ${
            message.message.length > 8 ? "long" : "short"
          }`
        );
      });
      await Promise.all(waitGroup);
    }
  
    private async randomWait(): Promise<void> {
      const delay = Math.random() * 5 * 1000;
      return new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  const main = async () => {
    const files = {
      "file1.txt": "out1.txt",
      "file2.txt": "out2.txt",
      "file3.txt": "out3.txt",
    };
  
    const parser = new Parser();
    const waitGroup: Promise<void>[] = Object.entries(files).map(([input, output]) =>
      parser.getContent(input)
        .catch(error => {
          console.error(`Error while getting file ${input} - ${error}`);
          return [];
        })
        .then(messages => parser.saveContent(messages, output))
        .catch(error => {
          console.error(`Error while processing file ${input} - ${error}`);
        })
    );
  
    await Promise.all(waitGroup);
  };
  
  main().catch(error => console.error(`Error in main execution - ${error}`));
  