import {
    PageSection,
    PageSectionVariants,
    Text,
    TextContent,
} from "@patternfly/react-core";

import { useParams } from "react-router-dom";
import { ForgeIcon } from "./ForgeIcon";
import { ProjectsList } from "../Projects/ProjectsList";
import { useTitle } from "../utils/useTitle";

const Forge = () => {
    useTitle("Project Forge");
    let { forge } = useParams();

    return (
        <div>
            <PageSection variant={PageSectionVariants.light}>
                <TextContent>
                    <Text component="p">
                        <ForgeIcon url={`https://${forge}`} /> {forge}
                    </Text>
                </TextContent>
            </PageSection>
            <PageSection>
                <ProjectsList forge={forge} />
            </PageSection>
        </div>
    );
};

export { Forge };
