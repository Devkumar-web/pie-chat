# Pie-Chat

Pie-Chat is a real-time chat application built using **Next.js** and **Tailwind CSS**. Authentication is managed by **Clerk**, and real-time messaging is powered by **GetStream**.

## Features

- 🔒 **Authentication:** Secure user authentication via Clerk.
- 💬 **Real-Time Messaging:** Powered by GetStream for instant chat updates.
- 🎨 **Modern UI:** Styled using Tailwind CSS for a sleek and responsive design.
- ⚡ **Optimized Performance:** Built with Next.js for fast and seamless interactions.

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Authentication:** Clerk
- **Real-Time Chat:** GetStream API

## Demo

### Screenshots

Here are some previews of Pie-Chat:

![Screenshot 1](/Demo/Screenshot 2025-03-15 142743.png)
![Screenshot 2](Demo/Screenshot_2.png)
![Screenshot 3](Demo/Screenshot_3.png)
![Screenshot 4](Demo/Screenshot_4.png)
![Screenshot 5](Demo/Screenshot_5.png)
![Screenshot 6](Demo/Screenshot_6.png)


### Video Demo

[![Watch the Demo](Demo/Demo.mp4)](Demo/Demo.mp4)

## Installation

Follow these steps to run the project locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/pie-chat.git
   cd pie-chat
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables in a `.env.local` file:
   ```sh
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   NEXT_PUBLIC_STREAM_API_KEY=your_stream_key
   ```

4. Run the development server:
   ```sh
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Contributing

Feel free to open issues or submit pull requests to improve Pie-Chat!

## License

This project is licensed under the MIT License.
