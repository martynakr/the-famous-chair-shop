import IllustrationCard from "../IllustrationCard/IllustrationCard"
import styles from "./HeaderIllustration.module.scss"

const HeaderIllustration = () => {
    return (
        <div className={styles.HeaderIllustration}>
            <IllustrationCard colour="#51383e" fill="white" height="340px" d1="M264,258.41c-.55-.27-1.67-.3-5.14-.35a248.61,248.61,0,0,1-38.17-3.32c-26.37-4.3-82.76-32.53-83.42-39.74s46.6-34.55,67-41.79c23.81-8.45,40-10.16,42.22-10.36a3.39,3.39,0,0,0,2.6,1.21h7.24a3.44,3.44,0,0,0,3.43-3.43v-1.39a3.44,3.44,0,0,0-3.43-3.43h-3.73c3.32-1,5.38-1.78,5.58-2.08,1.1-1.6,2.54-9.09,1-14.17-.7-2.26-1.89-3.74-3.56-4.39l-.2-.08h0l0,0,0,0a4.7,4.7,0,0,1-.74-.18c-8.71-6-27.33.64-41.48,7.32-2.4-.16-25-1.31-39.85,10.69-2.6-.11-21.55-.54-38.74,9.12a148,148,0,0,0-24.09,5,8.12,8.12,0,0,0,2.34-5.58c0-3.84-7.76-22.48-13.26-28-.42-2.64-4-23.33-12.81-32.76-.27-2.57-2.54-21.75-12.2-32.38,0-3-.55-25.64-13.48-32.55l-.21-.07c-.36-.07-8.88-1.74-14,1.06a18.78,18.78,0,0,0-5.07,3.59,3.41,3.41,0,0,0-3.38-2.89H37a3.43,3.43,0,0,0-3.43,3.43v7.29A3.41,3.41,0,0,0,35.16,51c0,.89.17,3.82.22,4.32,3.74,37.91,21,73.7,33.66,97.31,14.54,27.12,43.35,53.36,49.79,58,2.94,2.11,4.29,3.62,4.38,4.91.06.89-.47,1.83-1.66,3-2.66,2.53-9.12,8.1-18.55,15.47-13.21,10.33-24,16.9-32.83,20.09-6.12,2.2-24.35,5-34.58,4.86l-.36,0-.22.22c-.21.21-.56.56-.54,5v.73h.73s.85,0,2.16,0a120.45,120.45,0,0,0,14.48-.74c21-2.91,26.75-6.39,35.48-11.65,4.68-2.82,14.69-9.82,35.84-27.18l.67-.55.63-.52c3-2.55,6.73-5.71,18,2.36,7.48,5.37,38,23,70,32.46,13.86,4.08,51.21,5.89,53,5a1.84,1.84,0,0,0,1-1.75A5.07,5.07,0,0,0,264,258.41Zm-7.64-101.1a1.93,1.93,0,0,1,1.93,1.93v1.39a1.93,1.93,0,0,1-1.93,1.93H249.1a1.93,1.93,0,0,1-1.68-1h0a1.85,1.85,0,0,1-.25-.93v-1.39a1.84,1.84,0,0,1,.12-.66h0a1.92,1.92,0,0,1,1.81-1.26Zm.67-4.53c-1.2.66-8.65,2.86-19.64,5.91-4.6,1.27-9.82,2.69-15.47,4.21-43,11.58-110.65,28.76-114.84,28.76H107a9.09,9.09,0,0,1-2.37-1.6l153.15-39.59A9.4,9.4,0,0,1,257,152.78ZM203.13,169.5,200,170.65c-22.08,8.09-41,20.29-58.12,32.27-.39.27-1.44,1-2.71,2-2.24,1.64-6.41,4.71-6.92,5a6,6,0,0,1-5.51-.18c-4.72-2.32-12.45-8.4-21.09-17a4.69,4.69,0,0,0,.82.4,1.14,1.14,0,0,0,.37,0c5.28,0,54.75-12.73,76.29-18.35C187.65,173.57,194.89,171.68,203.13,169.5ZM253,135.66,215,145l-.09-.33-.26-.93-.14-.47C233.09,134.56,246.37,132,253,135.66Zm-40,8.06.14.47.24.84.09.33-38.8,9.52-.26-.93C188.78,142.47,210.62,143.56,213,143.72ZM173,154.4l.24.84-37.3,9.16-.39-1.19C151.86,154.14,169.72,154.28,173,154.4Zm82.27-17.75a5.1,5.1,0,0,1,2.46,3.35,21.6,21.6,0,0,1,.29,8.84l-154.79,40a135,135,0,0,1-9.37-10,.58.58,0,0,1,0-.53c.47-1.27,3.7-2.77,5.57-3.4ZM92.78,177a3.06,3.06,0,0,0-.37.83,1.82,1.82,0,0,0-.08.29c-1.47-1.77-2.94-3.59-4.39-5.45a9.37,9.37,0,0,0,3,.42,31.44,31.44,0,0,0,4.84-.47c.86-.14,1.74-.31,2.63-.52A18.69,18.69,0,0,0,92.78,177Zm41.31-13.37.38,1.16-35.38,8.68C109.67,167,129.82,164.15,134.09,163.6Zm-22.76-2.19a7.14,7.14,0,0,1-2.83,5.39c-1.17-2.62-6.77-15.21-13.42-30.67l3.61-1.47C103.93,140.13,111.33,158,111.33,161.41ZM98,133.31l-3.55,1.44c-4.3-10-9-21.07-13.18-31.37l4.5-1.53C93.8,110.6,97.42,129.73,98,133.31ZM74.28,70.25c8.2,9.94,10.55,26.84,11,30.21L80.73,102c-5.26-13-9.67-24.57-11.41-31l2.05-.75,2.22-.81Q73.95,69.83,74.28,70.25ZM73.05,68l-1.94.71L69,69.54l-.21-.79C64.8,53.28,62.06,41.42,61.16,37.5,72.14,44.27,73,64.55,73.05,68ZM47.64,38A15.39,15.39,0,0,1,54.8,36.6a34.47,34.47,0,0,1,4.69.34c.61,2.7,3.66,16,8.21,33.77,4.92,19.19,37.05,91.37,39.51,96.88A50.59,50.59,0,0,1,96,171C93.65,168,76.27,141.52,63.44,107.6,53.2,80.51,45.38,44.52,44.41,40A32.75,32.75,0,0,1,47.64,38Zm-4.52,3.09c1.5,6.94,9.1,41.05,18.92,67,12.23,32.32,28.39,57.58,32.31,63.15-4.57.62-6.73.21-7.81-1.42-.23-.34-.65-.92-1.12-1.58-.91-1.26-2.16-3-2.51-3.67C46.49,92.67,42.44,44.18,42.4,43.69l0-.11A2.43,2.43,0,0,1,43.12,41.11Zm-1.51,8.38C43.73,64,51.76,105.09,79.39,160.92c-1.45-2.14-2.87-4.33-4.24-6.54C65.8,139.25,50.26,99,46,84.62,42.62,73,40.89,51,40.87,50.76v-.18A3.59,3.59,0,0,0,41.61,49.49Zm-6.54-1.36V40.84A1.93,1.93,0,0,1,37,38.91h1.46a1.93,1.93,0,0,1,1.93,1.93v7.29a1.93,1.93,0,0,1-1.73,1.92H37l-.3,0A1.91,1.91,0,0,1,35.07,48.13ZM264.81,262.72c-2.05.58-37.93-1-51.95-5.08-34.46-10.14-65-29-69.54-32.24-12.19-8.75-16.6-5-19.82-2.29l-.61.51-.67.55c-21.08,17.3-31,24.26-35.66,27.06-8.57,5.16-14.24,8.57-34.92,11.44a127.06,127.06,0,0,1-15.66.72c0-1.16.05-2.36.13-3h.24c10.5,0,28.25-2.77,34.33-5,9-3.24,19.91-9.89,33.25-20.32,9.46-7.39,15.84-12.89,18.66-15.56,1.54-1.46,2.21-2.77,2.11-4.14-.12-1.83-1.57-3.57-5-6-3.75-2.69-33.93-28.74-49.33-57.47-12.6-23.5-29.78-59.1-33.5-96.75,0-.37-.14-2.45-.19-3.65h2.75c.33,3.84,2,22.84,5.17,33.48,4.24,14.45,19.87,54.9,29.28,70.12,17.29,28,41.83,50.79,52.17,55.86a7.52,7.52,0,0,0,6.84.19c.58-.29,3.45-2.39,7.14-5.11,1.26-.92,2.29-1.69,2.68-1.95,17-11.92,35.86-24.06,57.78-32.09,9.57-3.51,16.32-5.9,21.44-7.59,5.45-1.48,10.79-2.94,15.64-4.29,4.48-.9,7-1.29,8.14-1.44a2.74,2.74,0,0,0,0,.5v1.39a3.42,3.42,0,0,0,.09.79c-3.78.39-19.57,2.42-42,10.37-17.45,6.19-68.83,34.4-68,43.35s58.56,36.82,84.67,41.08a249.66,249.66,0,0,0,38.39,3.34,34,34,0,0,1,4.49.19,3.64,3.64,0,0,1,1.62,2.58C264.93,262.65,264.81,262.71,264.81,262.72Z" d2="M36.68,51.54a1.67,1.67,0,0,0,.32,0h-.32Z"/>
            <IllustrationCard height="310px" colour="#a2c2cd" fill="white" d1="M36.34,108.59v.13l-.12-.86h0A4.41,4.41,0,0,1,36.34,108.59Z" d2="M37.84,107.82v.73a5.82,5.82,0,0,0-.07-.73Z" d3="M262.22,107.82a5.2,5.2,0,0,0-.07.69,1.48,1.48,0,0,0,0,.21v-.9Z" d4="M263.78,107.82l-.14.87v-.1a4.91,4.91,0,0,1,.09-.77Z" d5="M234.17,49.83h0Z" d6="M55.8,149.22v.09s0,.12,0,.33A.88.88,0,0,1,55.8,149.22Z" d7="M236.64,57.69h0q0-.76,0-1.44c0-.26,0-.52,0-.76A7.07,7.07,0,0,1,236.64,57.69Z" d8="M287.37,177.48v-1.77a1.77,1.77,0,0,0-.83-1.51c1-3.43,5-18.52,4.61-26.79s-2.76-31-3.24-35.68h.84a2.43,2.43,0,0,0,2.4-2.46v-3.49a2.43,2.43,0,0,0-2.4-2.46h-2C287,100.5,287.83,91,287.83,84c0-9.43-1.43-18.51-3.83-24.3-2.7-6.49-15.38-12.32-20.22-12.32l-5.5-.05c-10.45-.11-20.8-.19-22.52.13a1.71,1.71,0,0,0-1.11.71,11.28,11.28,0,0,0-5.32-2.79c-4-1-101.17-1.33-108.18-1.33L108,44c-10.68,0-22.78,0-27.59,0-5.23.08-9.7,1.29-11.86,3.2a6.1,6.1,0,0,0-1.67-2,6.53,6.53,0,0,0-2.08-.75,102.38,102.38,0,0,0-20.23,0,43.56,43.56,0,0,0-18.15,5.85l-1.58.84-.12.06c-2.74,1.42-2.85,1.47-3.85,2.87-.41.57-1,1.36-2.07,2.66-4.35,5.19-2.63,39.69-2.24,46.55H11.23a2.43,2.43,0,0,0-2.4,2.46v3.49a2.44,2.44,0,0,0,2.4,2.46h3.22c-3.93,23.19,1.08,56.4,2,62.2H14.36a1.76,1.76,0,0,0-1.75,1.78v1.77a1.76,1.76,0,0,0,1.75,1.78h1.71c-3.8,14.51.82,29.34,2.23,33.32h-.53a3.25,3.25,0,0,0-3.21,3.29v3.93a3.26,3.26,0,0,0,3.21,3.29h11.9V256h8.17V223.09h224.3V256h8.18V223.09h12.41a3.42,3.42,0,0,0,3.36-3.46V216a3.45,3.45,0,0,0-2-3.13,17.44,17.44,0,0,0,3.7-8.16c.75-4.65.23-21.29-1.2-25.79A1.83,1.83,0,0,0,287.37,177.48Zm2.28-30c.4,8.06-3.74,23.4-4.59,26.45H270.32v-62.2H286.4C286.84,116,289.25,139.26,289.65,147.48ZM286.33,84c0,7.12-.85,16.74-1.1,19.36H267.39a5.33,5.33,0,0,0-5.17,4.5,5.2,5.2,0,0,0-.07.69,1.48,1.48,0,0,0,0,.21V212.58H247.75c-.08-5.92-1.47-50.23-2-61.8-.35-7.26.54-35.56,1.26-58.3.48-15.18.86-27.29.78-29.91.38-.53,2.38-2.65,9.35-2.17,7.79.53,22.68.35,25.67.31C285,66.34,286.33,75,286.33,84Zm-229.08,93a143.77,143.77,0,0,1-.08-26.29c3.39.82,14.06.74,42.52-.09,5-.15,9.85-.29,14.36-.4,24.7-.62,86.58.37,104.19,1.08,9.31.37,15.71.47,19.77.47s5.69-.09,5.73-.09l.53,0c.57,12.54,1.9,55.21,2,61H57.33C57.58,208.47,58.57,189.43,57.25,176.93Zm.27-27.66c2.1-3.31,9.83-16.53,11.75-19.8,3,1.45,12.52,1.11,28.92.38,6-.27,12.19-.55,18.47-.72,15.14-.39,49.71.34,75,.87,12.56.27,22.48.48,26.66.48,5.5,0,9.1,0,11.41.05h3.24l9.59,19.62c-2.63.07-10,.15-24.21-.42C200.67,149,138.74,148,114,148.65c-4.51.11-9.4.25-14.36.4C82.46,149.55,61.3,150.18,57.52,149.27ZM258.26,48.79l5.52.05c3.72,0,15,4.82,18.3,10.38-4.12.05-17.61.18-24.86-.32-5.71-.39-8.5.84-9.81,1.88-1.46-4.06-7.11-9.6-9.71-12C241.89,48.61,252.24,48.72,258.26,48.79ZM236.6,57.68q0-.76,0-1.44c0-.26,0-.52,0-.76a0,0,0,0,0,0,0c0-1,0-1.82,0-2.55a5.55,5.55,0,0,0-.89-3.45,1,1,0,0,1,.12-.37c3.18,2.84,10.23,9.8,10.44,13.33.12,1.92-.29,14.94-.77,30-.7,22.12-1.56,49.49-1.28,57.74l-10.1-20.64c-.07-5-.68-48.22,1.22-57.74A62.36,62.36,0,0,0,236.6,57.68ZM80.43,45.52c4.8-.07,16.9-.05,27.57,0l13.15,0c16.67,0,104.32.45,107.83,1.29a9.37,9.37,0,0,1,5.19,3h0C216,46.57,83.78,47.55,82.37,47.57a93,93,0,0,0-12.79.72C71.45,46.66,75.64,45.59,80.43,45.52ZM68.59,53.27c0-1.94,0-3.1,0-3.24.88-.28,3.84-.83,13.77-1,26.93-.35,140-.42,151.87,2.21.1.8.28,1.66.46,2.55.12.56.25,1.15.33,1.67a0,0,0,0,1,0,0v0c0,.22,0,.46,0,.7a62,62,0,0,1-1.22,15.23C232,80.8,232.47,119.86,232.6,129c-.58,0-1.57,0-2.91,0-2.31,0-5.92-.05-11.42-.05-4.16,0-14.08-.21-26.63-.48-20.19-.43-46.34-1-63.77-1-4.37,0-8.2,0-11.24.12-6.3.16-12.51.44-18.51.71-13.4.6-27.26,1.22-28.47-.39C69,126.8,68.07,115.56,68.59,53.27Zm-1.13-5,.07.13A3.21,3.21,0,0,0,67.12,50v.37c0,.48,0,1.47,0,2.9-.53,63.54.48,73.19,1.1,75.09-1.24,2.12-7.86,13.44-10.89,18.43.05-14.29.25-80.13,0-84.46-.32-4.73-.24-5.79.55-7.08C58.36,54.36,63.58,50.79,67.46,48.31ZM22.09,55c.79-1.1.79-1.1,3.32-2.41l.12-.06c.51-.26,1-.55,1.6-.85A42.07,42.07,0,0,1,44.71,46a99.87,99.87,0,0,1,19.84,0,5.37,5.37,0,0,1,1.62.58,2.36,2.36,0,0,1,.46.5c-2.51,1.6-9.22,6-10.09,7.39a5.76,5.76,0,0,0-.75,1.77c-5.58-1-28.33-.08-34.78.21C21.5,55.8,21.84,55.33,22.09,55Zm-2.33,3c3.33-.16,30.23-1.36,35.85-.29a43.18,43.18,0,0,0,.15,4.72c.32,4.63.05,83.66,0,86.8v.09s0,.12,0,.33h0v0a145.51,145.51,0,0,0,0,27.42c1.33,12.49.32,31.62.08,35.49h-18v-104a5.82,5.82,0,0,0-.07-.73,5.34,5.34,0,0,0-5.18-4.5H18.07C17.39,91.59,16.52,63,19.76,58ZM16,111.73h13.7v62.2H18C17.18,169,11.94,135.06,16,111.73Zm1.67,67.53h12v33.32H19.9C18.82,209.71,13.54,194.21,17.64,179.26Zm267,36.77v3.6a1.92,1.92,0,0,1-1.86,2H268.82v32.94h-5.18V221.59H36.34v32.94H31.17V221.59H17.77a1.75,1.75,0,0,1-1.71-1.79v-3.93a1.75,1.75,0,0,1,1.71-1.79h13.4V177.76H14.36a.27.27,0,0,1-.25-.28v-1.77a.27.27,0,0,1,.25-.28H31.17v-65.2H11.23a.94.94,0,0,1-.9-1v-3.49a.94.94,0,0,1,.9-1H32.59a3.82,3.82,0,0,1,3.66,3,4.41,4.41,0,0,1,.09.73V214.08h227.3V108.59a4.91,4.91,0,0,1,.09-.77,3.81,3.81,0,0,1,3.65-3h21.36a.93.93,0,0,1,.9,1v3.49a.93.93,0,0,1-.9,1H268.82v65.2h16.81a.27.27,0,0,1,.24.28v1.77a.26.26,0,0,1-.24.28H268.82v36.32h13.91A1.92,1.92,0,0,1,284.59,216Zm1.75-11.52a16,16,0,0,1-3.94,8.07H270.32V179.26h14.85C286.33,182.31,287.16,199.36,286.34,204.51Z" d9="M67.27,49a3.09,3.09,0,0,0-.15,1v.37a.92.92,0,0,1-.16-.77A.87.87,0,0,1,67.27,49Z" d10="M234.18,49.83h0Z"/>
            <IllustrationCard colour="#d79e01" fill="white" height="320px" d1="M142,261.88l.71,0v-.09Z" d2="M141.19,261.83v.09l.7,0Z" d3="M233.31,273.76c0-1.62-.23-5.14-2.35-5.91-1.94-.71-61.93-4.35-82.76-5.59V250c24.87-2.26,52.33-13.7,66.65-28.29,43.76-44.57,51.29-89.87,49.9-120C263.24,69,251.21,46.5,251.09,46.28l-.11-.15C232.18,25.57,192.17,21,180.51,21.71A15,15,0,0,0,168.3,29c-3.1,5.2-5,15.29,3.55,33.78,14.37,31.09,18.5,54.29,13,73-2.74,9.33-9.94,13.88-15.49,16-10.66,4.17-24.73,3.1-34.23-2.6-16.12-9.68-33.21-11.32-50.79-4.87C72.07,148.83,60.46,168.11,52,182.19c-.43.71-.84,1.4-1.26,2.08-6,0-12.09.63-15,6.33a4.78,4.78,0,0,0,.22,5.05,11.53,11.53,0,0,0,5.25,3.83c-.45,3.18,1.23,7.84,8,14.58l.37.38c12.38,13,44.14,34.77,86.29,35.89v11.91c-20.65,1.24-81,4.9-82.93,5.61-2.12.76-2.36,4.25-2.36,5.88h-.11A2.25,2.25,0,0,0,48.2,276v.14a2.25,2.25,0,0,0,2.25,2.25h7.7a2.25,2.25,0,0,0,2.25-2.25V276a2.32,2.32,0,0,0-.13-.75H223.14a2.32,2.32,0,0,0-.13.75v.14a2.25,2.25,0,0,0,2.25,2.25H233a2.25,2.25,0,0,0,2.25-2.25V276A2.25,2.25,0,0,0,233.31,273.76Zm-183.49-88c-.21.35-.41.69-.62,1a38.13,38.13,0,0,0-9.73,1.5C41.87,186.43,45.29,185.87,49.82,185.78Zm-12.91,8.56a3.22,3.22,0,0,1,.09-3c1.86-2.09,7.86-2.84,11.25-3a53.48,53.48,0,0,1-5.32,7.54A6.8,6.8,0,0,0,41.56,198C40.39,197.55,37.83,196.28,36.91,194.34Zm13.74,19.07-.41-.41C43,205.8,40.86,200.25,44,196.92c2.33-2.45,5.38-7.53,9.25-13.95,8.36-13.89,19.81-32.92,31.59-37.24A58.54,58.54,0,0,1,105.11,142a56.19,56.19,0,0,1,29.25,8.51c10,6,24.3,7.1,35.55,2.71,8.41-3.28,14.07-9.17,16.38-17,5.61-19.09,1.45-42.63-13.08-74.06-8.28-17.91-6.54-27.5-3.62-32.39a13.35,13.35,0,0,1,11-6.51c9.88-.61,50.59,3.58,69.21,23.86.78,1.48,12,23.32,13.45,54.71,1.36,29.84-6.12,74.68-49.48,118.84-15.69,16-47.47,28.13-73.91,28.26h-.58C95.84,248.88,62.34,225.71,50.65,213.41Zm8.25,62.71a.75.75,0,0,1-.75.75h-7.7a.75.75,0,0,1-.75-.75V276a.75.75,0,0,1,.75-.75h7.7a.75.75,0,0,1,.75.75Zm82.29-2.39H52.06c0-1.63.3-4.08,1.35-4.47,2.31-.65,63.37-4.39,87.78-5.84Zm.7-11.85-.7,0-3.84.23V250.36c.64,0,1.28,0,1.92,0h.61c2.24,0,4.52-.11,6.82-.29v12.07l-4-.24-.71,0Zm.8,11.85V263.42c24.4,1.45,85.46,5.19,87.75,5.84,1.07.39,1.37,2.84,1.37,4.47Zm91,2.39a.74.74,0,0,1-.75.75h-7.7a.75.75,0,0,1-.75-.75V276a.75.75,0,0,1,.75-.75H233a.74.74,0,0,1,.75.75Z"/>
           
        </div>
    )
}

export default HeaderIllustration
