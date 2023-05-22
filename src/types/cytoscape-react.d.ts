
declare module "cytoscape-react" {
    interface GraphProps {
        cyParams?: cytoscape.CytoscapeOptions;
        layoutParams: Record<string, string> & { name: string };
        layoutDebounce?: number;
        children: React.ReactElement[];
    }

    interface NodeProps {
        cytoInstance?: unknown | null;
        id: string;
        layout?: () => void,
        classes?: string;
        children: React.ReactElement,
    }

    interface EdgeProps {
        cytoInstance?: unknown | null;
        id: string;
        layout?: () => void,
        classes?: string;
        children?: React.ReactElement[];
        target: string;
        source: string;
    }

    export function Graph(props: GraphProps): JSX.Element;
    export function Node(props: NodeProps): JSX.Element;
    export function Edge(props: EdgeProps): JSX.Element;


}


