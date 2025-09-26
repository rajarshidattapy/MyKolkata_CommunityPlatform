from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

app = FastAPI()
analyzer = SentimentIntensityAnalyzer()

class Feedback(BaseModel):
    text: str
    swipeDirection: str  # 'right' or 'left'
    userStars: Optional[float] = None  # 1.0 to 5.0

@app.post('/analyze')
def analyze(feedback: Feedback):
    vs = analyzer.polarity_scores(feedback.text)
    compound = vs['compound']
    # NLP-based star rating
    nlp_stars = 2 * compound + 3
    if feedback.swipeDirection == 'right':
        nlp_stars += 0.5
    elif feedback.swipeDirection == 'left':
        nlp_stars -= 0.5
    nlp_stars = max(1.0, min(5.0, round(nlp_stars, 1)))
    # Blend user star rating and NLP star rating (simple average)
    if feedback.userStars is not None:
        final_stars = round((nlp_stars + feedback.userStars) / 2, 1)
    else:
        final_stars = nlp_stars
    return {"stars": final_stars}

