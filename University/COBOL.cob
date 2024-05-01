IDENTIFICATION DIVISION.
PROGRAM-ID. PRODUCE-REORDER-LISTING.

ENVIRONMENT DIVISION.
CONFIGURATION SECTION.
SOURCE-COMPUTER. DEC-VAX.
OBJECT-COMPUTER. DEC-VAX.
INPUT-OUTPUT SECTION.
FILE-CONTROL.
  SELECT BAL-FWD-FILE   ASSIGN TO READER.
  SELECT REORDER-LISTING   ASSIGN TO LOCAL-PRINTER.

DATA DIVISION.
FILE SECTION.
FD  BAL-FWD-FILE
    LABEL RECORDS ARE STANDARD
    RECORD CONTAINS 80 CHARACTERS.
01  BAL-FWD-CARD.
    02 BAL-ITEM-NO        PICTURE IS 9(5).
    02 BAL-ITEM-DESC      PICTURE IS X(20).
    02 FILLER             PICTURE IS X(5).
    02 BAL-UNIT-PRICE     PICTURE IS 999V99.
    02 BAL-REORDER-POINT  PICTURE IS 9(5).
    02 BAL-ON-HAND        PICTURE IS 9(5).
    02 BAL-ON-ORDER       PICTURE IS 9(5).
    02 FILLER             PICTURE IS X(30).

FD  REORDER-LISTING
    LABEL RECORDS ARE STANDARD
    RECORD CONTAINS 132 CHARACTERS.

01  REORDER-LINE.
    02 RL-ITEM  -NO       PICTURE IS Z(5).
    02 FILLER             PICTURE IS X(5).
    02 RL-ITEM-DESC       PICTURE IS X(20).
    02 FILLER             PICTURE IS X(5).
    02 RL-UNIT-PRICE      PICTURE IS ZZZ.99.
    02 FILLER             PICTURE IS X(5).
    02 RL-AVAILABLE-STOCK PICTURE IS Z(5).
    02 FILLER             PICTURE IS X(5).
    02 RL-REORDER-POINT   PICTURE IS Z(5).
    02 FILLER             PICTURE IS X(71).

WORKING-STORAGE SECTION.
01  SWITCHES.
    02 CARD-EOF-SWITCH    PICTURE IS X.
01  WORK-FIELDS.
    02 AVAILABLE-STOCK    PICTURE IS 9(5).

PROCEDURE DIVISION.
000-PRODUCE-REORDER-LISTING.
    0PEN INPUT BAL-FWD-FILE.
    OPEN OUTPUT REORDER-LISTING.
    MOVE "N" TO CARD-EOF-SWITCH.
    PERFORM 100-PRODUCE-REORDER-LINE
      UNTIL CARD-EOF-SWITCH IS EQUAL TO "Y".
    CLOSE BAL-FWD-FILE.
    CLOSE REORDER-LISTING.
    STOP RUN.

100-PRODUCE-REORDER-LINE.
    PERFORM 110-READ-INVENTORY-RECORD.
    IF CARD-EOF-SWITCH IS NOT EQUAL TO "Y"
      PERFORM 120-CALCULATE-AVAILABLE-STOCK
      IF AVAILABLE-STOCK IS LESS THAN BAL-REORDER-POINT
        PERFORM 130-PRINT-REORDER-LINE.

110-READ-INVENTORY-RECORD.
    READ BAL-FWD-FILE RECORD
      AT END
        MOVE "Y" TO CARD-EOF-SWITCH.

120-CALCULATE-AVAILABLE-STOCK.
    ADD BAL-ON-HAND BAL-ON-ORDER
      GIVING AVAILABLE-STOCK.

130-PRINT-REORDER-LINE.
    MOVE SPACE              TO REORDER-LINE.
    MOVE BAL-ITEM-NO        TO RL-ITEM-NO.
    MOVE BAL-ITEM-DESC      TO RL-ITEM-DESC.
    MOVE BAL-UNIT-PRICE     TO RL-UNIT-PRICE.
    MOVE AVAILABLE-STOCK    TO RL-AVAILABLE-STOCK.
    MOVE BAL-REORDER-POINT  TO RL-REORDER-POINT.
    WRITE REORDER-LINE.