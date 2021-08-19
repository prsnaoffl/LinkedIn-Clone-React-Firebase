import React from 'react';
import styles from './Box.module.css';

const Box = ({title,
             list1,
             list1date,
             list2,
             list2date,
             list3,
             list3date,
             list4,
             list4date,
             more}) => {
    return (
        <div className={styles.box}>
            <div className={styles.title}>
                <h5>{title}</h5>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA/1BMVEUAVJ3////8/PwAUpz5+fn29vYAUJsATZrz8/Pu7u7s7Oy6urrn5+fw8PDj4+O2tbMASZjZ2dnGxsbPz8/U1NS/v797lr/JyckARZcATZxyiajY2Njl5OIATJ2InrsAQ5YyZ6bv9PkARZ1Xfa3g5u/J0+O+yt0APpQnYKMXWqCasc8+bqqkuNwAT6SIo8/a5PJPerhEcahig62orbJ1krxUerCpudOSp8i3xNp4k70ANpFehLafs9AIWKg0aq0pZKxoi8Ozw+O9zeqitt+MptB6mM7W3/Xp7/thhcA5bbm8yNYmYbJBcbTb4/Squct/mLmZqsCgrbuKm65qhaiElawqoEYXAAAPlElEQVR4nO2de1vaSBvGQwZmUETiAUx0KUREoWop4mlfq1ZbD9tqW9Tv/1nemUnCQWaSyeQJrHt5/6fdJfn5nGcmwcj812XM+gZS1zvh29c74dvXO+Hb1zvh29c74dvXO+Hb1zvh29c74dvXOyGItra2moeV1zqkv3bTv3jahNvNs6MGqdkWmZRt11pHR5VmM9U7SJPw+MRo2xbGGBkyIYyJbbWM4+3U7iIlwtz2ibFjESRnG+NElr3TPemYadxKGoRu89CidEpwQ2FSax1uwd8NPOH2WduOjefbktTqFeioBCbcOrOskLBTgbSsE1BvBSU8bdU0rTcG6ewcARoSjtCt7NrJ8Tzh2tHHLNB9QRG6FUIwEB9ntIwTmDuDIXT/3gFwz3Eh53/HEPcGQljZIcB4nizjS/KbAyA8blmp8HHG3cQ5JzFhB1vQ/jkqbO26MyXcOttJk48J7VQS1cdkhF/a6QTguKx6kr48CaHbTdVBh8L4cCaEpzXIAhgq5GDtjKNN6FZq0zGgJ9zW7VZ1CZtH6ZUIseyK3milSbhtT81DB7JaWohahO4JWI8dR7il0+LoELpn9gz4DFYaP06F0DybdggOZcdHjE/YmUqVlwg5sZu42ITNRIsUyUXqMRHjEjaN6SfRV4gxrRiTsAM6yE8FMR5hE3yS11E8R41FOHsX9RTLinEIO/jfARgPMQah2f63ANIOTn2cUid0z8DroOLGjUjqpV+ZMAvcyRB78/zicr9maTpGTRVRmfAEshdF1n6lueWa7l1n735Hj9FWnIlVCbchAYmxNzLO3n3VmlSw4jClSNiBBLQP3fFPv77QCXHczsERukeAadT+NPn5lzqfbyktM6oRVgCzjACQIv7UQaydQhEe1+AAibiSuYZWLHZgCLcAXRQZrvgiVzpuQo6iQ1GFsAtIaO3JrvKgY0QrepNRgfAjZKnflyYHLSMiK7IqRhNutQEnJvK3/EKbOh+Iu1F+GklograjYX/yr1rBYEV1b5GEzR1AQGMzpA/5pPWnRO2I1iaK0E3Q/wt07sovpRWI1PHPwut+FCFomjHQRcjdXGteqhaebCII3RaoCdGlC0+IG6FGDCc0Dx1IQFos7uQX+6brLnboqZRwwg5omqGqhbRZFd2kjdquLqF5Br0yI29pMpl/tAPC+hjip6GE4CY08L30Ynf6F0MtV48Qtth72pEG4vcEFwsr+2GEnRRWuPFXycXcaoJPRa2c1E/lhGbmMI1tNPtafLmviS5mHWdkiCE23IKthb4kMXOarLPAZ9nYhCZwOzMQ+SlAvNYaLEZkNU0JopwwX09pnwlPIl4lBWTdaUxCM9NM7TgCRuNV8e5rcm+hI0ZcQvhqP3I71sXVkO9TFSKj0aovRpQSFlM9lYesnftPe9fX3yqXQOeL6bAfi9A0v6R9pAQTy9J4tEaqWkdsRBlhFnKBbSoiv+MQmmanPes7jiu8WxQiSgizx7M796Sr2paw6ssIIbdipiTnRN2GprnlpH5AHf4T63mREcWE2YRtYphoDrWrqN02qrob3BIh1FEnNFMZKwy2e39+dHO6fXvnZtzb03vYE1bWL1VCMzsHuZI/ELL2b5pjE3DnM+RfEp/lBIhiwnnADcPB9a2LvcnrQyLirigQxYQnwIuI1H72g3j0fYDcP/+hSJjN/YYOQ3IuW2RrJlm9eCXrNDf5XKaA0MwWocPQ/upKAEGNiM8EbioizM3Btmxo80rKl8kAdk/4rDg5YAhtCNuykcvbEMDMLWDMW1tKhNncL0hCshuyV8FvAU720qSbThKa2Txkvcdh69Fc53BBb31RIswVd+GCH11GWDDJfsWEyGF+wk1FhHOA0281NAa5PsNdjVRUCLO5Jlzjbyk8/QlIiFpz+dcVUUT4A2wd0boJPtX9vn8vWe4D9FLDXogmpInmB1QqxZ+DT706t9COZHf0JyChtVB8nWomCXN5sGIRHKwzT9gT35sSwnOgqzFZSxM1X0BYhCoW9jf/I/maNq7LFqUBZR2rEM41YEIfP4wCSrd/HyF3KZ2TaRIGpxI+eYnLkhx31T1kIpRzMpePIszm52EIib/b+83fn8eumBC0CXY+TJSL14QmGOGm18x0/MZaekYBsBwywvlowuICCCHxjnO7QddpXUkIAVtETlicFmHVi8KbIC/vSDLpI+g2pfNhoiAKCP+CIPSL/XWwpIXPJCbUPJEoEVEgzMHY0OJnze72Bz9fSQhhN2LJh79el4tJwjkQG3ozxf3gk/ZdMaC7H/YpsUUJ56ZE2GaX2RvEmDSTwjrptAlvh/aROuk97N7FFAmt68zdyIkjJJn0XeCzgc70CA3jcORpreEY9Up7wHtclHB+aoSj716QHiuFXNNnmirhiJDligEfoa80K8JgjpoQtJNONw5HJHdS6G1KRULtI+Uy7bhiQNBnb7mcX0qEoIv6VPhIYkK954DCZK0uzoJQ6qQX4HvpSoRFcMKq5Nkr+EcBjOrGYmTnTaenFdjjz9Jyn+R0vuRS3SWV+XBhaReUUOqksGMFEz5QJYSd2SQrwbfwp5LIISMcv4xgJWphEfSgAvpHYkL4TGpYv5YmNi4Eq4kLf/2BPGwiddIUHnawfigQmrn5xV+QXip7DiiNk/LttcX5yBVhRrgKeHJwmk6KG6uLrxtv4ar+4irgoxbkuxjQvEzhoaqDjYmCL9x7WlwCTDUyJ31M4eic1Z8s+KIdUlou4FKNtNyDt/fsUO6PyXIo2uXOLyytgWUBmZOmUO4NVF+ZTKWisxh5mmrAar79KAa8TSGT4kOaaFQIaTLdOAAiRLsSE6aQSQ3nz+RkITkxtLgBNV5InRTwIFQgZKwJEo3w1BdNNcstmKs6MidN4aQ87q4IEo3w5B5NNSswz1ugc4kJ03BS8ntVkGjE50tpqumDHN11ZE4KP93TpLYs6GgkhMXF1WWQY8I1iZOOLUERqMfzhGEoOQVN3RRiSRH9lJhwZLpHm5UbGH/5IAxD8Un2/PzSKkRbQ0SvZmMank5Azm0mAxH0CPdWliYGCwkhb77XAOYLmZOOvCCCb7tB7APjozVRNZQ9b1Fc2FhJXvTRheQ7m/YGTmrxVARBWP2zsiFyUgkhqxeFxH0VuRF8ONNgW9Tb0HAByj9qLYuaUgmhVy+WE58Ulr1h1Bw46T5fpOoADFJkXeKksqfzmJv+SZji0KXkCM1g796+4j9DlH+nJ3FSGSFz0+WEk740kwZEwck3ACfFjTWWSZUJ/WyacNK3JG8xyfjrF8jxxv9rgEGq2pc5qfQ5YFb0C8n6GlsCeOt7f83/CwDsdOOul2fUCVnRp0Z8TmJE6fqFH4ZBpoU4X0r+rPHhNwYhHxLXykn6GmnX7b1rJ3hBlwvQhOPdsrgnDSPkuSaREW3ZsyRejxa8a0j7LW0jIn+WVxYlTip/8wfNNRtrSSJx0w0jtHwLbwFUCtxlJhTnmRBCr2D81vZTdCH5ZE5IHvzbgXgO2O7L80zYO4Z4wSho10TJG5Ez7Dwfth/89uobQKUgjWVpqQgl5AVj+UnXiNKmNOPeXATbUY8AIxpCvTAThr3NjBuxrNudhr0/cHCJC4ChwlkveyaMT+gZsafZnaq82P8eIAhRq7AsHu4jCQMjrut5kh39MvHvEOvepB+WSCMIvXRaqGu5UjThNcTuE2mUQ6Mw4s2QvCaW+1qEtajvZoBouGlnVIgwYTghO7Wwslw+0PHTKBve7kMsV1afmAklHWk0obdbShF1dqIiMs31JgQgeS6XWZoJMWEEoTdilPsa627Wt1BAEAuieq8sHypUCIOKUf4dv2TIKz7VKcw3RFb75fBKoUDIk81KuXAQu3Ih2blgKoD3JDI5L2U/zegTDvy00IodirIHmzOPn2EASaMQ7aPR72Rnz0ExP+3FnqNkbrrnAD2E2y14PhqWZlQIs56flmO34EhYLx4fwDbwe4XySqSPqnz7g++n8bs3PPmK+c491PdAI6ev5KMq3+AR5NPCetxsgy/GrOhe6349lwAQPVEfXV2MyKNqhINQLDRiI6JPwWLN7en9JeC3JJPfgyCEIMzmWSguFwq7sWsGqbZ/fv78z3nbsSC/oZUcFOjMxIIw0oQqhMOSUdIYMxDCGMF+DQirE4pBqEjoteAMsac3SQGLNEocMGxmiknoheIqDcVS/MqfEqBCJYxFOMg2pfoMv9F5CKiYZdQJeeH3EbszRUTkYACo4qPKhF5C5Yi9A8D3AMYGROseoFIajUXoJVTPis/VmX3vsfMUACplmViEo4jrwNlfVdjo+4BKdSIu4Sji00y+Gph0e/EB4xCOIvZmkFKdRkkDMBZhgEhLf6F0kPrboseFqi+lAq+D8QDjEfKMuuAjPqFpeiqp9zng6tKCepLRIPQRV9doG17qd8HfxSsTqj7zENQAjEvISn+R9qg8GEvrQAsSUSLtFy8E2UCoWgd1CX3EDYZIzVhP4QuTXguRRo95KBuX4gPGJ+SIg3xTWm+nnFQRaT0xA/o5JjagBiFtw3lKpcHIPLXXSNVVMXoucQOyEGRJNC6gDiFHnBt4Kss4abkqrlIHHXqoDqAW4cBTuRkp40srlXBEpNsfGHBxPn4IJiBkA+OoGUvr8IyY7NIAHBhwLq82DkIRck+lOXVgxt5LCzQecbUb8DED8hyqBahNyD01P8/M6DOWnroEaD0NEdLoB3zMgDo5NDkhM6MXjbRweIz9Rju5syLstGgHw/lYkfcjUBcwCSFHZNG4xFocj7H3suskgsQENWgDM8LHIlDbgAkJAzNSVx0ylnrP9SrRGpERJtXuem+cL5kBExP6Gcdn9OORQxoxYxJRPKO7zv93SL7khAzRY2TxyBh9yJdGHTtYCRNh7Bj155cRvDWfj9X4ZIDJCf1wHDIOIEv9p0YXVUMxMSZOtd09eOoFeGN8iQ0IQzjKuLEyDlnq9Z4ODupVhwjkOE734Lnvww3xVjbg+IAIPV/NFWleZYYMIANKTvr0sj6ul6eRf/boOB41H82fNP5A+MAIM6OG9CB9ylFMsfh/Rek8vKH5QPggCSkiZ5ybZ5Zk7sopPUwxZ8GHY3Q09jaY9ebnoNzTFyBh5jXkqmdLhhmAjon/nsOtrDLjBXiQfNCEGT8i88xdGaWHyc25HLB6XExrHtwGp2POCY6XSYEw40NyUzJb+pwMdFwUjbMxOG48jgfMlw5hxnNXRulhLnBQhjoU/8WCB5caHVNKhEyckmPmi8U5SspZPbEf5hhansOlRceUIiGTaXqcFJSjDpTj8tjSo2NKmdCT6Ss7VPCr9C8+FcKZ6p3w7eud8O3rnfDt679P+H8G2K/325D1mwAAAABJRU5ErkJggg=="
                    alt="info-logo" />
            </div>
            <ul className={styles.list}>
                <div>
                    <li>{list1}</li>
                    <p className={styles.date}>{list1date}</p>
                </div>
                <div>
                    <li>{list2}</li>
                    <p className={styles.date}>{list2date}</p>
                </div>
                <div>
                    <li>{list3}</li>
                    <p className={styles.date}>{list3date}</p>
                </div>
                <div>
                    <li>{list4}</li>
                    <p className={styles.date}>{list4date}</p>
                </div>
            </ul>

            <div className={styles.more}>
               <p>{more}</p>
                <img src="https://image.flaticon.com/icons/png/128/271/271210.png"
                alt="down" />
            </div>

        </div>
    )
}

export default Box
