import {hiddenConstantParameter, Parameter, selectionType} from "../sources/types";

export type Destination = {
    type: string
    parameters: Parameter[]
}


export const commonParameters: Record<string, () => Parameter | Parameter> = {
    mode: (streamOnly?: boolean): Parameter => {
        return streamOnly ?
            hiddenConstantParameter("_formData.mode", "stream") :
            {
                id: _formData.mode,
                displayName: "Mode",
                se

            }
    }

}