import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Results() {
  const router = useRouter();
  const [career, setCareer] = useState("");

  useEffect(() => {
    const { answers } = router.query;
    if (answers) {
      const parsedAnswers = JSON.parse(answers);
      // AI-based career suggestion logic
      setCareer("Data Scientist");
    }
  }, [router.query]);

  return (
    <div className="container">
      <h2>Your Suggested Career</h2>
      <p>{career}</p>
    </div>
  );
}
