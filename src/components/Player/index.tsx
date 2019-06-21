import React from 'react'
import { Svg, View } from 'react-sketchapp';
const { Defs, Path, G, Use, Text,TSpan } = Svg;

const SvgComponent = props => (
  <Svg width={240} height={220} {...props} style={{position:'absolute',left:10,bottom:10}} >
    <G fill="none" fillRule="evenodd">
      <Path fill="#FFF" d="M.5 218.807h239v-197H.5z" />
      <Path stroke="#000" d="M.5 218.807h239v-197H.5z" />
      <Path fill="#CCC" d="M8.5 76.807h50v-45h-50z" />
      <Path stroke="#000" d="M8.5 76.807h50v-45h-50z" />
      <Text
        fontFamily="LucidaGrande, Lucida Grande"
        fontSize={12}
        fill="#000"
        transform="translate(0 -1)"
      >
        <TSpan x={13} y={94.407}>
          {'0:30'}
        </TSpan>
      </Text>
      <Text
        fontFamily="LucidaGrande, Lucida Grande"
        fontSize={12}
        fill="#000"
        transform="translate(0 -1)"
      >
        <TSpan x={204.88} y={94.407}>
          {'4:15'}
        </TSpan>
      </Text>
      <Path fill="#E6E6E6" d="M43 93.307h151v-5H43z" />
      <Path fill="#000" d="M42.5 93.807h70v-5h-70z" />
      <Path stroke="#000" d="M42.5 93.807h70v-5h-70z" />
      <Path
        d="M39.29 189.866c1.476 2.238 2.214 4.693 2.214 7.367 0 2.674-.738 5.13-2.215 7.369-1.477 2.237-3.44 3.885-5.895 4.944a1.276 1.276 0 0 1-.453.086c-.302 0-.564-.111-.785-.331a1.073 1.073 0 0 1-.33-.785c0-.418.225-.761.68-1.03.08-.045.211-.106.391-.182.181-.075.312-.136.393-.182a13.319 13.319 0 0 0 1.43-.891 11.098 11.098 0 0 0 3.348-3.958 10.989 10.989 0 0 0 1.203-5.04c0-1.78-.4-3.46-1.203-5.04a11.127 11.127 0 0 0-3.348-3.958 13.48 13.48 0 0 0-1.43-.89 4.041 4.041 0 0 0-.393-.182 3.733 3.733 0 0 1-.39-.183c-.456-.267-.682-.61-.682-1.03 0-.302.11-.563.331-.785.221-.221.483-.33.785-.33.151 0 .302.029.453.087 2.454 1.057 4.418 2.706 5.895 4.944m-3.732 2.44c.988 1.507 1.482 3.148 1.482 4.927a8.8 8.8 0 0 1-1.482 4.927c-.989 1.506-2.296 2.602-3.924 3.287a1.192 1.192 0 0 1-.436.087c-.313 0-.582-.11-.803-.331a1.076 1.076 0 0 1-.33-.784c0-.453.227-.797.68-1.03.65-.337 1.093-.592 1.324-.767a6.577 6.577 0 0 0 2.016-2.363 6.593 6.593 0 0 0 .723-3.026c0-1.07-.242-2.078-.723-3.025a6.585 6.585 0 0 0-2.016-2.363c-.23-.174-.674-.43-1.324-.767-.453-.233-.68-.576-.68-1.028 0-.303.11-.565.33-.786.221-.22.483-.332.786-.332.151 0 .302.03.453.088 1.628.686 2.935 1.782 3.924 3.287m-3.723 2.45a4.49 4.49 0 0 1 .74 2.476c0 .884-.246 1.706-.74 2.469a4.128 4.128 0 0 1-1.962 1.63.988.988 0 0 1-.437.087c-.3 0-.564-.108-.784-.323a1.065 1.065 0 0 1-.33-.792c0-.245.07-.452.208-.62a2.04 2.04 0 0 1 .506-.436c.197-.122.395-.255.592-.402.2-.145.367-.351.506-.62.14-.266.21-.597.21-.993 0-.394-.07-.726-.21-.994a1.76 1.76 0 0 0-.506-.62 9.358 9.358 0 0 0-.592-.4 2.061 2.061 0 0 1-.506-.436.945.945 0 0 1-.209-.618c0-.315.111-.578.331-.794a1.09 1.09 0 0 1 .784-.323.96.96 0 0 1 .437.088c.813.313 1.468.854 1.962 1.62m-5.956-7.01v18.975c0 .3-.11.563-.33.784-.222.22-.484.332-.786.332-.302 0-.564-.112-.785-.332l-5.807-5.807h-4.569c-.302 0-.564-.111-.785-.332a1.075 1.075 0 0 1-.33-.785v-6.695c0-.303.11-.565.33-.786.221-.22.483-.331.785-.331h4.57l5.806-5.807c.221-.221.483-.33.785-.33.302 0 .564.109.785.33.221.222.331.482.331.785"
        fill="#B3B3B3"
      />
      <Path
        d="M71.397 211.005a1.04 1.04 0 0 1-.768-.314l-10.88-10.499a5.056 5.056 0 0 1-.48-.454c-.204-.209-.526-.589-.968-1.142a14.89 14.89 0 0 1-1.185-1.7c-.35-.58-.66-1.284-.934-2.11a7.64 7.64 0 0 1-.41-2.406c0-2.558.738-4.558 2.215-5.999 1.476-1.44 3.517-2.162 6.12-2.162.722 0 1.458.125 2.208.374a8.916 8.916 0 0 1 2.092 1.013c.644.423 1.2.821 1.665 1.193.466.373.907.768 1.325 1.186.42-.418.86-.813 1.326-1.186.465-.372 1.02-.77 1.665-1.193a8.923 8.923 0 0 1 2.093-1.013 6.971 6.971 0 0 1 2.206-.374c2.605 0 4.645.721 6.12 2.162 1.477 1.441 2.215 3.441 2.215 6 0 2.568-1.33 5.184-3.992 7.846l-10.865 10.464c-.21.21-.465.314-.768.314"
        fill="#5DFC71"
      />
      <Path
        d="M179.401 206.161v2.231c0 .303-.11.565-.33.786-.222.22-.483.332-.786.332h-29.018c-.303 0-.564-.112-.785-.332a1.074 1.074 0 0 1-.33-.786v-2.23c0-.303.11-.565.33-.785.221-.22.482-.332.785-.332h29.018c.303 0 .564.112.785.333.221.22.331.482.331.784m-6.696-6.698v2.231c0 .303-.112.566-.33.786a1.075 1.075 0 0 1-.787.332h-22.32c-.304 0-.565-.11-.786-.332a1.072 1.072 0 0 1-.33-.786v-2.23c0-.303.11-.565.33-.785.221-.22.482-.33.785-.33h22.321c.303 0 .564.11.786.33.22.22.331.482.331.784m4.465-6.696V195c0 .303-.112.564-.332.785a1.074 1.074 0 0 1-.786.332h-26.785c-.303 0-.564-.11-.785-.332a1.071 1.071 0 0 1-.33-.785v-2.232c0-.302.11-.563.33-.785.221-.22.482-.33.785-.33h26.785c.303 0 .565.11.786.33.22.222.332.483.332.785m-6.698-6.696v2.232c0 .302-.11.563-.33.784a1.072 1.072 0 0 1-.785.332h-20.09c-.303 0-.564-.11-.785-.332a1.07 1.07 0 0 1-.33-.784v-2.232c0-.303.11-.564.33-.785.221-.22.482-.332.785-.332h20.09c.302 0 .563.111.784.332.221.221.331.482.331.785M230.357 204.787v3.35a.54.54 0 0 1-.166.392.537.537 0 0 1-.393.165h-21.205a.538.538 0 0 1-.392-.165.54.54 0 0 1-.166-.392v-3.35a.54.54 0 0 1 .558-.557h21.205c.152 0 .282.055.393.165a.54.54 0 0 1 .166.392zm0-8.928v3.348c0 .15-.055.282-.166.392a.536.536 0 0 1-.393.167h-21.205a.537.537 0 0 1-.392-.167.535.535 0 0 1-.166-.392v-3.347a.536.536 0 0 1 .558-.558h21.205c.152 0 .282.054.393.166.111.11.166.24.166.392zm0-8.929v3.348a.535.535 0 0 1-.166.393.538.538 0 0 1-.393.166h-21.205a.54.54 0 0 1-.392-.166.535.535 0 0 1-.166-.393v-3.347c0-.152.055-.283.166-.393a.536.536 0 0 1 .392-.166h21.205c.152 0 .282.055.393.166.111.11.166.241.166.392zm-24.554 2.18v1.726h-5.842v-1.726h1.866c0-.475.003-1.186.01-2.128.004-.94.008-1.644.008-2.109v-.21h-.035c-.094.198-.385.512-.873.942l-1.237-1.326 2.372-2.215h1.847v7.047h1.884zm-.05 21.048c0 .93-.319 1.662-.953 2.197-.633.536-1.422.803-2.363.803-1.232 0-2.232-.382-2.999-1.15l.994-1.535c.57.523 1.186.785 1.85.785.336 0 .63-.085.88-.253.25-.17.375-.416.375-.74 0-.745-.612-1.07-1.832-.977l-.453-.978c.093-.115.282-.369.566-.759.285-.388.532-.702.742-.94.21-.239.424-.463.645-.673v-.017c-.186 0-.468.007-.846.017-.378.012-.66.018-.846.018v.924h-1.848v-2.65h5.807v1.535l-1.656 2.005c.592.138 1.062.425 1.412.854.35.431.524.941.524 1.534zm.033-10.934v2.773h-6.313a6.198 6.198 0 0 1-.104-.94c0-.594.135-1.135.41-1.623.272-.489.6-.883.984-1.186.384-.303.768-.578 1.152-.828.383-.25.712-.502.985-.758.272-.256.41-.518.41-.786 0-.29-.086-.515-.254-.67-.168-.157-.398-.234-.687-.234-.535 0-1.007.335-1.413 1.008l-1.483-1.028a3.135 3.135 0 0 1 1.247-1.386 3.498 3.498 0 0 1 1.84-.498c.848 0 1.563.241 2.145.725.581.482.872 1.137.872 1.961 0 .583-.199 1.114-.594 1.595a4.603 4.603 0 0 1-1.308 1.125 9.954 9.954 0 0 0-1.316.881c-.4.32-.607.625-.619.916h2.215v-1.047h1.831zM125.316 197.693a.274.274 0 0 0-.422.318l1.092 2.765c-5.087-.324-6.7-2.57-8.703-5.361-2.28-3.18-5.117-7.135-13.256-7.135v4.486c5.835 0 7.501 2.323 9.61 5.264 2.202 3.07 4.917 6.848 12.38 7.24l-1.123 2.842a.273.273 0 0 0 .422.316l6.7-5.15a.272.272 0 0 0 0-.434l-6.7-5.151zm-7.502-2.69c.44.61.852 1.185 1.28 1.712 1.48-1.632 3.338-2.797 6.892-3.025l-1.092 2.766a.273.273 0 0 0 .422.316l6.7-5.15a.274.274 0 0 0 0-.434l-6.7-5.151a.274.274 0 1 0-.422.318l1.123 2.842c-4.81.25-7.647 1.912-9.646 3.882a37.494 37.494 0 0 1 1.443 1.925zm-4.796 3.439c.704.98 1.462 2.035 2.402 3.035-2.143 2.467-5.265 4.71-11.393 4.71v-4.485c4.858 0 6.826-1.613 8.566-3.85.141.194.282.389.425.59z"
        fill="#B3B3B3"
      />
      <Path
        d="M237.828 8.973a8.973 8.973 0 1 0-17.946 0 8.973 8.973 0 0 0 17.946 0"
        fill="#E6E6E6"
      />
      <Path
        d="M229.269 4.838v1.38h1.378l-2.963 2.961.965.965 2.963-2.962V8.56h1.377V4.84h-3.72zm2.343 4.823h1.377v3.446h-8.267V4.838h3.444v1.38H226.1v5.511h5.512V9.661z"
        fill="#000"
      />
      <Path
        d="M211.894 9.448a8.973 8.973 0 0 0-17.945 0 8.972 8.972 0 1 0 17.946 0"
        fill="#E6E6E6"
      />
      <Path
        d="M203.873 9.448l3.1 3.1a.416.416 0 0 1 .068.22.3.3 0 0 1-.068.194l-.551.55a.276.276 0 0 1-.194.07.421.421 0 0 1-.22-.07l-3.086-3.113-3.1 3.114a.421.421 0 0 1-.22.07.303.303 0 0 1-.194-.07l-.551-.551a.3.3 0 0 1-.068-.193c0-.083.027-.151.068-.22l3.114-3.101-3.114-3.1a.419.419 0 0 1-.068-.22c0-.082.027-.138.068-.193l.551-.551a.303.303 0 0 1 .194-.07.42.42 0 0 1 .22.07l3.1 3.114 3.1-3.114a.423.423 0 0 1 .22-.07c.083 0 .139.029.194.07l.55.55c.042.056.07.112.07.194a.412.412 0 0 1-.07.22l-3.113 3.1z"
        fill="#000"
      />
      <Path d="M8.5 31.807l50 45M58.5 31.807l-50 45" stroke="#000" />
      <Path
        d="M51.624 118.579c.267-.266.49-.357.673-.273.181.084.273.308.273.672v30.924c0 .364-.092.589-.273.673-.183.083-.406-.007-.673-.273l-14.916-14.916a1.78 1.78 0 0 1-.272-.4v14.916c0 .364-.092.589-.274.673-.182.083-.406-.007-.673-.273l-14.916-14.916a1.294 1.294 0 0 1-.399-.947c0-.363.133-.678.399-.945l14.916-14.916c.267-.266.491-.357.673-.273.182.084.274.308.274.672v14.915c.069-.151.16-.286.272-.398l14.916-14.916zM149.451 111.373v46.133c0 .568-.209 1.06-.623 1.474a2.014 2.014 0 0 1-1.475.622h-16.775c-.568 0-1.06-.207-1.475-.622a2.018 2.018 0 0 1-.622-1.474v-46.133c0-.566.208-1.059.622-1.474a2.017 2.017 0 0 1 1.475-.623h16.775c.57 0 1.06.208 1.475.623.414.415.623.908.623 1.474m-29.357 0v46.133c0 .568-.208 1.06-.623 1.474a2.018 2.018 0 0 1-1.475.622h-16.775c-.569 0-1.059-.207-1.475-.622a2.017 2.017 0 0 1-.62-1.474v-46.133c0-.566.206-1.059.62-1.474.416-.415.906-.623 1.475-.623h16.775c.568 0 1.06.208 1.475.623.415.415.623.908.623 1.474M194.523 150.302c-.268.266-.49.356-.673.272-.182-.084-.273-.308-.273-.67v-30.926c0-.364.091-.589.273-.673.182-.084.405.008.673.273l14.915 14.916c.112.113.203.246.273.4v-14.916c0-.364.091-.589.273-.673.183-.084.407.008.673.273l14.917 14.916c.265.267.398.582.398.946 0 .365-.133.68-.398.946l-14.917 14.916c-.266.266-.49.356-.673.272-.182-.084-.273-.308-.273-.67v-14.917c-.07.14-.16.273-.273.4l-14.915 14.915zM118 90.807a5.5 5.5 0 1 0-11.001.001A5.5 5.5 0 0 0 118 90.807"
        fill="#000"
      />
      <Path
        d="M118 90.807a5.5 5.5 0 1 0-11.001.001A5.5 5.5 0 0 0 118 90.807z"
        stroke="#000"
      />
      <Text
        fontFamily="Helvetica"
        fontSize={14}
        fill="#000"
        transform="translate(0 -1)"
      >
        <TSpan x={71.397} y={43.071}>
          {'Podvis #17:'}
        </TSpan>
      </Text>
      <Text
        fontFamily="Helvetica"
        fontSize={14}
        fill="#606060"
        transform="translate(0 -1)"
      >
        <TSpan x={71.397} y={59.871}>
          {'Maakt massatoerisme de '}
        </TSpan>
      </Text>
      <Text
        fontFamily="Helvetica"
        fontSize={14}
        fill="#606060"
        transform="translate(0 -1)"
      >
        <TSpan x={71.397} y={76.671}>
          {'wereld onleefbaar?'}
        </TSpan>
      </Text>
    </G>
  </Svg>
)

export default SvgComponent
