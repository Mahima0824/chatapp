import { HoverEffect } from "@/components/ui/card-hover-effect";

export function SuggestFriend() {
  return (
    <div className=" overflow-y-auto ">
      <h2 className="text-2xl font-bold text-center text-white mb-6">People You May Know</h2>
      <HoverEffect items={suggestedFriends} />
    </div>
  );
}
export const suggestedFriends = [
    {
      title: "John Doe",
      description: "Software Engineer .",
      link: "/chatapp/johndoe",
      image: "https://i.pravatar.cc/150?img=2",
      followers: 1200
    },
    {
      title: "Jane Smith",
      description: "UI/UX design.",
      link: "/chatapp/janesmith",
      image: "https://i.pravatar.cc/150?img=5",
      followers: 890
    },
    {
      title: "David Lee",
      description: "Blockchain Developer",
      link: "/chatapp/davidlee",
      image: "https://i.pravatar.cc/150?img=4",
      followers: 530
    },
    {
      title: "Emma Brown",
      description: "AI Researcher at OpenAI,",
      link: "/chatapp/emmabrown",
      image: "https://i.pravatar.cc/150?img=5",
      followers: 2200
    },
    {
      title: "Michael Scott",
      description: "Regional Manage",
      link: "/chatapp/michaelscott",
      image: "https://i.pravatar.cc/150?img=5",
      followers: 450
    },
    {
        title: "Michael Scott",
        description: "Regional Manager ",
        link: "/chatapp/michaelsc",
        image:"https://i.pravatar.cc/150?img=5",
        followers: 450
      },
    {
      title: "Emma Brown",
      description: "AI Researcher at OpenAI,",
      link: "/chatapp/emmabrown",
      image: "https://i.pravatar.cc/150?img=5",
      followers: 2200
    },
    {
      title: "Michael Scott",
      description: "Regional Manage",
      link: "/chatapp/michaelscott",
      image: "https://i.pravatar.cc/150?img=5",
      followers: 450
    },
    {
        title: "Michael Scott",
        description: "Regional Manager ",
        link: "/chatapp/michaelsc",
        image:"https://i.pravatar.cc/150?img=5",
        followers: 450
      },
      
  ];
  
