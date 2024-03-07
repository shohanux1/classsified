import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const rulesList: string[] = [
  "All posters must be of legal age.",
  "You may not post any content or information of anyone that is not of legal age.",
  "You may not mention or infer that any person advertised is of less than legal age. Words like 'young', 'school girl-like' or similar may not be used.",
  "You may not post images or personal information of another person without consent.",
  "If posting in Escort/Massage/DOM categories, you may only post in the areas that you currently see people in.",
  "If you are touring, you MUST state the exact dates you are going to be in each of the cities you are visiting.",
  "If you are primarily selling photos/videos/snap, you must post in the Cam/Snap/Web/Phone category.",
  "Only females may post in the Female escort category.",
];

const AdRules = () => {
  return (
    <Card className="bg-slate-50 border-dashed">
      <CardHeader>
        <CardTitle className="text-slate-800 text-lg md:text-xl font-normal">
          You agree to follow these rules:
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="text-xs md:text-sm font-normal space-y-3 text-slate-600 list-decimal list-inside">
          {rulesList.map((rule, i) => (
            <li key={i}>{rule}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default AdRules;
