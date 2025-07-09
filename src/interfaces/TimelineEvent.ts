export interface TimelineEvent {
  id: number;
  side: "start" | "end";
  icon: string;
  eventDesc: string;
}
