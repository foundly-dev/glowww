import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Item } from "@/content/schema";

export interface ItemCardProps {
  item: Item;
}

export const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <Card className="max-size-[300px] group relative aspect-square h-full w-full">
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          {item.description}
        </div>
      </CardContent>
    </Card>
  );
};
