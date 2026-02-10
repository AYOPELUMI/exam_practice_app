
import { Button } from "@/components/ui/button";
import { ArrowLeft, ThumbsUp, Star, Calendar, Clock } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=200&fit=crop",
    title: "Contribution of Open Access Databases to Intensive Care Medicine Research",
    description: "A scoping review that examines how open access ICU databases have helped research into critical care medicine.",
    likes: 4,
    rating: 2,
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=200&fit=crop",
    title: "Contribution of Open Access Databases to Intensive Care Medicine Research",
    description: "A scoping review that examines how open access ICU databases have helped research into critical care medicine.",
    likes: 4,
    rating: 2,
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=200&fit=crop",
    title: "Contribution of Open Access Databases to Intensive Care Medicine Research",
    description: "A scoping review that examines how open access ICU databases have helped research into critical care medicine.",
    likes: 4,
    rating: 2,
  },
];

const events = [
  {
    type: "ZOOM EVENT",
    title: "Pass your exams like a pro",
    description: "A speaking session for both undergraduates and professionals",
    date: "Jan 19",
    time: "21:00",
  },
  {
    type: "ZOOM EVENT",
    title: "Pass your exams like a pro",
    description: "A speaking session for both undergraduates and professionals",
    date: "Jan 19",
    time: "21:00",
  },
];

const StudyMaterials = () => {
  return (
    <>
      <div className="max-w-5xl animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-semibold">Study Materials</h1>
          </div>
          <Button variant="accent">Upgrade plan</Button>
        </div>

        {/* Resources Section */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-6">Resources</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{resource.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{resource.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <ThumbsUp className="h-4 w-4" />
                      <span className="text-sm">{resource.likes}</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${star <= resource.rating ? 'fill-warning text-warning' : 'text-muted'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section>
          <h2 className="text-lg font-semibold mb-6">Upcoming Events</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <div key={index} className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="h-40 bg-muted" />

                <div className="p-5">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">{event.type}</p>
                  <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{event.description}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </span>
                  </div>

                  <Button className="w-full">Register for Free</Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default StudyMaterials;
